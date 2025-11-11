<template>
  <v-app class="background">
    <v-app-bar app color="#FBFBFB" flat height="100" v-if="sAppBar">
      <v-row class="align-center | justify-space-between | padding-32 | padding-top-56 | padding-bottom-16">
        <!-- 로고 -->
        <v-col cols="auto">
          <v-row class="align-center | pl-3">
            <v-img 
            src="@/assets/logo.svg"
            :width="84" :height="30"
            min-width="84px" min-height="30px" 
            ></v-img>
          </v-row>
        </v-col>
        <v-col cols="8">
          <v-row v-if="sHeader" class="align-center | justify-end | pr-2">
            <v-col cols="auto" class="progress-bar">
                <div
                v-for="(step, index) in 7"
                :key="index"
                class="circle"
                :class="{ active: index === pageIndex }"
                >
                <div class="line" v-if="index !== 6"></div>
                </div>
            </v-col>
          </v-row>
        </v-col>
        <v-divider class="margin-top-16" />
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view
        @start-survey="emitStartSurvey"
        @restart-survey="emitRestartSurvey"
        @continue-survey="emitContinueSurvey"
        @fix-survey="emitFixSurvey"
        @hide-appbar="emitHideAppbar"
      ></router-view>
    </v-main>

    <v-footer color="#FBFBFB" flat v-if="sFooter">
      <v-row 
        class="align-center | justify-space-between | pl-6 | pr-6 | pt-4 | pb-4" 
        no-gutters
      >
        <v-btn 
          v-if="sHomeBtn"
          prepend-icon="mdi-arrow-left" 
          variant="text"
          @click="handleClickGoPage('home')"
        >
          <template v-slot:prepend>
            <v-icon color="#FF5858"></v-icon>
          </template>
          Home
        </v-btn>
        <v-btn 
          v-else="sHomeBtn"
          prepend-icon="mdi-arrow-left" 
          variant="text"
          @click="handleClickGoPage('back')"
        >
          <template v-slot:prepend>
            <v-icon color="#FF5858"></v-icon>
          </template>
          Back
        </v-btn>

        <v-btn 
          v-if="sNextBtn"
          append-icon="mdi-arrow-right" 
          variant="text"
          @click="handleClickGoPage('next')"
        >
          <template v-slot:append>
            <v-icon color="#FF5858"></v-icon>
          </template>
          Next
        </v-btn>
        <v-btn 
          v-else="sNextBtn"
          append-icon="mdi-arrow-right" 
          variant="text"
          @click="handleClickGoPage('finish')"
          :loading="isSubmitting"
        >
          <template v-slot:append>
            <v-icon color="#FF5858"></v-icon>
          </template>
          Finish
        </v-btn>

      </v-row>
    </v-footer>
  </v-app>

  <!-- 다이얼로그 -->
  <v-dialog v-model="dialog.dialogActive" width="auto">
    <v-card class="pa-2 | pb-3" rounded="lg">
      <v-card-title class="text-title | pl-4 | pr-4 | pt-4">
        <v-row style="justify-content: start; align-items: center;">
          <v-col class="pt-0 | pb-0 | pl-4 | pr-1" cols="auto">
            <v-img
              src="@/assets/logo.png"
              height="24"
              width="24"
              class=""
            ></v-img>
          </v-col>
          <v-col class="pl-1" cols="auto">
            {{ dialog.title }}
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="text-subtitle | pl-4 | pr-4 | pt-2 | pb-3" v-html="dialog.text"></v-card-text>
      <template v-slot:actions>
          <v-row no-gutters justify="end">
              <v-btn color="#FF5858" width="25%" rounded="xl" variant="outlined" @click="dialog.dialogActive = false">취소</v-btn>
              <v-btn color="#FF5858" width="25%" rounded="xl" variant="flat" class="ml-2" @click="dialog.okButton" :loading="isSubmitting">확인</v-btn>
          </v-row>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
// ----- 선언부 ----- //
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

import { db } from "@/common/Firebase"; // Firestore 초기화 파일
import { collection, addDoc, updateDoc, doc } from "firebase/firestore"; // Firestore 함수

import axios from "axios";

const router = useRouter();
const route = useRoute();

const surveyPage = ref([
  { path: "/", meta: { appbar: false, index: 0 } },
  { path: "/home", meta: { appbar: false, index: 0 } },
  { path: "/survey1", meta: { appbar: true, index: 1 } },
  { path: "/survey2", meta: { appbar: true, index: 2 } },
  { path: "/survey3", meta: { appbar: true, index: 3 } },
  { path: "/survey4", meta: { appbar: true, index: 4 } },
  { path: "/survey5", meta: { appbar: true, index: 5 } },
  { path: "/survey6", meta: { appbar: true, index: 6 } },
  { path: "/survey7", meta: { appbar: true, index: 7 } },
  { path: "/text2img", meta: { appbar: true, index: 11 } },
]);
const pageIndex = ref(0);

const sHomeBtn = ref(true);
const sNextBtn = ref(true);
const sHeader = ref(false);
const sFooter = ref(false);
const sAppBar = ref(false);

const dialog = ref({
  title: '',
  text: '',
  isActive: false,
  okButton() {}
});

const surveyId = ref(null);
const isSubmitting = ref(false);
const survey = ref({
  dorm:  null,
  birth: null,
  studentId: null,
  college: 0,
  mbti: "",
  smoke: null,
  drink: "",
  sdEtc: "",
  wakeUp: "",
  lightOff: "",
  bedTime: "",
  sleepHabit: 0,
  clean: 0,
  bug: 0,
  eatIn: 0,
  noise: 0,
  share: 0,
  home: 0,
  selectTag: [],
  notes: "",
  imageUrl: ""
});


// ----- 라이프 사이클 ----- //
onMounted(() => {
  console.log(import.meta.env)
  
  if (!localStorage.getItem('appInitialized')) {
    initSurvey();
  } else {
    // Restore survey data from localStorage
    const savedSurvey = localStorage.getItem('userSurvey');
    if (savedSurvey) {
      survey.value = JSON.parse(savedSurvey);
    }
    // Restore surveyId from localStorage
    const savedSurveyId = localStorage.getItem('surveyId');
    if (savedSurveyId) {
      surveyId.value = savedSurveyId;
    }
  }
});

onUnmounted(() => {

});

watch(() => route.path, (path) => {
    // Update the pageIndex based on the current route
    const currentPage = surveyPage.value.find((page) => page.path === path);
    if (currentPage) {
      pageIndex.value = currentPage.meta.index - 1;
    } else if (!['/end', '/home', '/'].includes(path)) {
      console.error("Current path does not exist in surveyPage:", path);
    }

    // 헤더, 푸터, 앱바 설정
    if (path === "/home" || path === "/") {
      sHeader.value = false;
      sFooter.value = false;
      sAppBar.value = false;

    } else if (path === "/text2img") {
      sHeader.value = false;
      sFooter.value = true;
      sAppBar.value = true;

    } else if (path === "/end") {
      sHeader.value = false;
      sFooter.value = false;
      sAppBar.value = true;

    } else {
      sHeader.value = true;
      sFooter.value = true;
      sAppBar.value = true;
    }

    // 전/후/처음 버튼 관련

    // 'Next' vs 'Finish' button logic
    if (path === '/survey7' || path === '/text2img') {
      sNextBtn.value = false; // Show Finish
    } else {
      sNextBtn.value = true; // Show Next
    }

    // 'Home' vs 'Back' button logic
    if (path === '/survey1' || path === '/text2img') {
      sHomeBtn.value = true; // Show Home
    } else {
      sHomeBtn.value = false; // Show Back
    }
  },
  { immediate: true }
);

// ----- 함수 정의 ----- //
function initSurvey() {
  localStorage.setItem('appInitialized', 'true');
  localStorage.setItem('userProgress', JSON.stringify({ currentStep: 0}));
  localStorage.setItem('userSurvey', JSON.stringify(survey.value));
  localStorage.removeItem('surveyId');
  surveyId.value = null;

  console.log("set localStorage appInitialized:", localStorage.getItem('appInitialized'))
  console.log("set localStorage userProgress:", localStorage.getItem('userProgress'))
  console.log("set localStorage userSurvey:", localStorage.getItem('userSurvey'))
}

function handleClickGoPage(state) {
  // 현재 경로에 해당하는 인덱스를 찾음
  const currentIndex = surveyPage.value.findIndex((page) => page.path === route.path);

  if (currentIndex === -1) {
    console.warn("현재 경로가 surveyPage에 없습니다.");
    return;
  }

  switch (state) {
    case "home":
      openDialog(
        '처음으로 돌아가기',
        '처음 화면으로 돌아갑니다.<br>현재까지 작성한 내용은 초기화됩니다.',
        emitRestartSurvey
      )
      break;

    case "back":
      if (currentIndex > 0) {
        const previousPage = surveyPage.value[currentIndex - 1]; 
        console.log("현재 페이지:", currentIndex.path);
        console.log("이동한 페이지:", previousPage.path);
        router.push(previousPage.path); 
      }
      break;

    case "next":
      if (currentIndex < surveyPage.value.length - 1) {
        const nextPage = surveyPage.value[currentIndex + 1]; 
        console.log("현재 페이지:", route.path);
        console.log("이동한 페이지:", nextPage.path);
        router.push(nextPage.path); 
      } 
      break;

    case "finish":
      openDialog(
        '이미지 생성하기',
        '설문조사를 끝내고 이미지를 생성할까요?<br>물론, 다시 돌아와 수정할 수 있습니다.',
        submitSurveyToFBWithLoading
      )
      break;

    default:
      console.warn("Invalid state:", state);
      break;
  }
};

function emitHideAppbar() {
  console.log('Event Received: hide appbar');
  sFooter.value = false;
};

function emitStartSurvey() {
  console.log('Event Received: Start Survey');
  initSurvey();
  router.push("/survey1");
};

function emitRestartSurvey() {
  console.log('Event Received: Restart Survey');
  // 완전 초기화
  localStorage.removeItem('userSurvey');
  localStorage.removeItem('userProgress');
  localStorage.removeItem('surveyId');
  localStorage.removeItem('appInitialized');
  
  dialog.value.dialogActive = false;
  initSurvey();
  router.push("/home");
};

function emitFixSurvey() {
  console.log('Event Received: Fix Survey');
  router.push("/survey7");
};

function emitContinueSurvey() {
  console.log('Event Received: Continue Survey');
  router.push("/survey1");
};

function openDialog(title, text, onConfirm) {
  dialog.value.title = title;
  dialog.value.text = text;
  dialog.value.okButton = onConfirm;
  dialog.value.dialogActive = true;
}

// 신규: 텍스트로 이미지 생성 API를 호출하는 함수
async function generateImageFromText(text) {
  console.log("AI 이미지 생성을 시작합니다:", text);

  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const tid = `survey-${Date.now()}`;
    const response = await axios.post(`${baseUrl}/v1/generate/survey`, {
      tid: tid,
      orig_text: text,
    });

    if (response.data && response.data.status.code === "S0000") {
      console.log("AI 이미지 생성 완료:", response.data.data);
      return { 
        success: true, 
        surveyData: response.data.data, 
        error: null 
      };
    } else {
      console.error("AI 이미지 생성 실패 (API 응답 오류):", response.data);
      return { 
        success: false, 
        surveyData: null, 
        error: response.data?.status?.detail || "API 응답 상태가 S0000가 아닙니다" 
      };
    }
  } catch (error) {
    console.error("AI 이미지 생성 실패 (네트워크 또는 서버 오류):", error);
    return { 
      success: false, 
      surveyData: null, 
      error: error.response?.data?.status?.detail || error.message 
    };
  }
}

// ===== submitSurveyToFBWithLoading 수정 =====
async function submitSurveyToFBWithLoading() {
  if (isSubmitting.value) return;
  
  isSubmitting.value = true;
  dialog.value.dialogActive = false; // 확인 다이얼로그 닫기
  
  try {
    await submitSurveyToFB();
    // 성공 시 페이지 이동은 submitSurveyToFB 내부에서 처리
  } catch (error) {
    console.error("Submission process failed:", error);
    // 에러 다이얼로그 표시
    openDialog(
      '제출 실패', 
      `설문 제출 중 오류가 발생했습니다.<br>${error.message}`, 
      () => {
        dialog.value.dialogActive = false;
      }
    );
  } finally {
    isSubmitting.value = false;
  }
}

// ===== submitSurveyToFB 수정 (에러 전파) =====
async function submitSurveyToFB() {
  const existingSurvey = localStorage.getItem('userSurvey');
  console.log('get existingSurvey', existingSurvey);

  if (!existingSurvey) {
    console.error("No survey data to submit.");
    throw new Error("저장된 설문 데이터가 없습니다.");
  }

  let parsedSurvey = JSON.parse(existingSurvey);

  // 1. TextToImg 페이지에서 AI 처리
  if (route.path === '/text2img' && parsedSurvey.notes) {
    console.log("AI 설문 데이터 생성 시작...");
    
    const result = await generateImageFromText(parsedSurvey.notes);
    
    if (result.success && result.surveyData) {
      // 2. AI 데이터 병합
      parsedSurvey = { ...parsedSurvey, ...result.surveyData };
      
      // 3. localStorage 즉시 업데이트
      localStorage.setItem('userSurvey', JSON.stringify(parsedSurvey));
      console.log("AI 생성 데이터 병합 완료:", result.surveyData);
    } else {
      // AI 실패 시 에러 전파
      console.error("AI 생성 실패:", result.error);
      throw new Error(`AI 처리 실패: ${result.error || '알 수 없는 오류'}`);
    }
  }

  // 4. Firestore 저장/업데이트
  try {
    if (!surveyId.value) {
      await submitSurvey(parsedSurvey);
    } else {
      await updateSurvey(parsedSurvey);
    }
    console.log("Firestore 저장 완료");
  } catch (error) {
    console.error("Firestore 저장 실패:", error);
    throw new Error("설문 저장에 실패했습니다. 네트워크를 확인해주세요.");
  }

  // 5. 모든 작업 성공 시에만 페이지 이동
  router.push("/end");
}

// ===== submitSurvey 수정 (에러 전파) =====
const submitSurvey = async (surveyData) => {
  console.log(typeof surveyData, surveyData);
  try {
    const docRef = await addDoc(collection(db, "surveys"), surveyData);
    console.log("Survey submitted successfully with ID:", docRef.id);
    localStorage.setItem('surveyId', docRef.id);
    surveyId.value = docRef.id;
  } catch (error) {
    console.error("Error submitting survey:", error);
    localStorage.removeItem('surveyId');
    surveyId.value = null;
    throw error; // 에러 전파
  }
};

// ===== updateSurvey 수정 (에러 전파) =====
const updateSurvey = async (updates) => {
  if (!surveyId.value) {
    const error = new Error("문서 ID가 없습니다. 먼저 설문을 제출해주세요.");
    console.error(error.message);
    throw error;
  }
  try {
    const surveyRef = doc(db, "surveys", surveyId.value);
    await updateDoc(surveyRef, updates);
    console.log("Survey updated successfully with ID:", surveyId.value);
  } catch (error) {
    console.error("Error updating survey:", error);
    throw error; // 에러 전파
  }
};


</script>

<style scoped>

.margin-top-16 {
  margin-top: 16px;
}

.padding-32 {
  padding: 32px;
}

.padding-top-56 {
  padding-top: 56px;
}

.padding-bottom-16 {
  padding-bottom: 16px;
}

.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px; /* 원 사이 간격 */
}

.circle {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #B1B1B1; /* 기본 배경색 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle.active {
  background-color: #ff5858; /* 현재 단계 배경색 */
}

.line {
  position: absolute;
  width: 17px;
  height: 0.6px;
  background-color: #B1B1B1;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}

.text-title {
    font-size: 19.5px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.5px;
}

.text-subtitle {
    font-size: 15x;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.4px;
    color: #404040;
}


</style>
