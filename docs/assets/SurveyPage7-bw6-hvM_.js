import{B as y,V as i,_ as x}from"./VLabel-CtSPkZea.js";import{_ as h,r as g,o as b,a as F,q as v,c as m,w as o,b as d,d as a,f as u,g as V,aZ as T,a_ as $,F as k,h as p,G as B,a$ as I}from"./index-DNi92f73.js";import{V as N}from"./VTextField-Bw4mKAmC.js";import{V as O}from"./VChip-T3ZTNCxj.js";import"./VInput-DevVoMDh.js";const P="참고사항",j="앞서 작성한 것 외에 더 하고 싶은 말이 있다면<br>이 페이지에서 자유롭게 말해주세요.",J={__name:"SurveyPage7",setup(L){const l=g([]),f=g([{title:"매트선호",value:"매트선호"},{title:"룸메와 거리두기 필요",value:"룸메와 거리두기 필요"},{title:"공부중",value:"공부중"},{title:"고요를 즐김",value:"고요를 즐김"},{title:"배달음식러버",value:"배달음식러버"},{title:"잦은 밤샘",value:"잦은 밤샘"},{title:"길거나 잦은 통화",value:"길거나 잦은 통화"},{title:"환기 자주 필요",value:"환기 자주 필요"},{title:"방에 자주 비움",value:"방을 자주 비움"},{title:"추위 많이 탐",value:"추위 많이 탐"},{title:"더위 많이 탐",value:"더위 많이 탐"},{title:"짐이 많음",value:"짐이 많음"},{title:"잠귀 밝음",value:"잠귀 밝음"}]),r=g("");b(()=>{C()}),F(()=>{}),v(l,(t,e)=>{console.log(`--- selectTag changed from ${e} to ${t}`),c("selectTag",t)}),v(r,(t,e)=>{console.log(`--- notes changed from ${e} to ${t}`),c("notes",t)});function C(){localStorage.setItem("userProgress",JSON.stringify({currentStep:7})),console.log("Updated localStorage userProgress:",localStorage.getItem("userProgress"));const t=localStorage.getItem("userSurvey");if(t){const e=JSON.parse(t);l.value=e.selectTag||[],r.value=e.notes||""}}function c(t,e){const n=JSON.parse(localStorage.getItem("userSurvey"))||{};n[t]=e,localStorage.setItem("userSurvey",JSON.stringify(n)),console.log(`Updated localStorage userSurvey: ${t} = ${e}`)}function _(t){const e=l.value.indexOf(t);e!==-1?l.value.splice(e,1):l.value.length<5?l.value.push(t):console.log("tag select lmit - 5"),console.log("Selected tags:",l.value),c("selectTag",l.value)}return(t,e)=>{const n=x;return d(),m(y,null,{default:o(()=>[a(n,{title:P,desc:j}),a(u,{"no-gutters":"",justify:"start"},{default:o(()=>[a(i,{innerHTML:"해당하는 것이 있다면 선택해주세요<br>(최대5개)"})]),_:1}),a(u,{"no-gutters":"",justify:"start",class:"mt-4"},{default:o(()=>[a(V,null,{default:o(()=>[(d(!0),T(k,null,$(f.value,(s,S)=>(d(),m(O,{key:S,class:B([{"v-chip--selected":l.value.includes(s.value)},"custom-chip | mb-2 | mr-2 | pr-3 | pl-3"]),style:{backgroundColor:"white"},color:l.value.includes(s.value)?"#FF5858":"#B1B1B1",variant:"outlined",onClick:U=>_(s.value)},{default:o(()=>[p(I(s.title),1)]),_:2},1032,["class","color","onClick"]))),128))]),_:1})]),_:1}),a(u,{"no-gutters":"",justify:"start",class:"margin-top-52"},{default:o(()=>[a(i,null,{default:o(()=>e[1]||(e[1]=[p("더 하고 싶은 말이 있다면 작성해주세요")])),_:1})]),_:1}),a(u,{"no-gutters":"",justify:"center",class:"mt-1"},{default:o(()=>[a(N,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#CCCCCC",color:"#CCCCCC","item-color":"#CCCCCC",placeholder:"태그 설명 등을 작성해주세요",modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),maxlength:"100"},{"append-inner":o(()=>[a(i,{class:"count-label",text:`${r.value.length}/100`},null,8,["text"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},E=h(J,[["__scopeId","data-v-f67f6c9b"]]);export{E as default};
