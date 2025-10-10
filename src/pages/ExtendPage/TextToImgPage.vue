<template>
  <v-container>
    <v-row no-gutters justify="center" class="mt-2">
      <v-col class="subtitle-text">
        룸메이트 구인 글을 이곳에 입력하여 둥지동지 결과이미지를 제작해보세요.
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" class="mt-8">
      <v-col cols="12" md="12" lg="12">
        <v-textarea
          label="룸메이트 구인 글을 입력해주세요."
          variant="outlined"
          :rows="textareaRows"
          auto-grow
          max-rows="18"
          class="text-area-custom"
          @focus="onFocus"
          @blur="onBlur"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMobile = ref(false);
const textareaRows = ref(15);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 600;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

function onFocus() {
  if (isMobile.value) {
    textareaRows.value = 5; 
  }
}

function onBlur() {
  textareaRows.value = 15; 
}

function finish() {
  // 기능 구현은 나중에 할게요..
  console.log('Finish button clicked');
  // 일단 홈으로 돌려보냅니다.
  router.push('/home');
}
</script>

<style scoped>
.margin-top-100 {
  margin-top: 100px;
}
.title-text {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
.subtitle-text {
  font-size: 16px;
  text-align: left;
  color: #666;
  margin: 0 10px;
}

.text-area-custom :deep(.v-field__outline) {
  color: #FF6161;
}
.finish-btn {
  font-size: 20px;
  font-weight: bold;
}
</style>