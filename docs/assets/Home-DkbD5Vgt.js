import{_ as f,o as x,a as v,r as y,c as n,b as l,w as e,d as s,V as _,e as V,f as a,g as S,h as r,i as C,j as h,k as b,l as w,m as i,n as I,p as u}from"./index-nzhg-jI0.js";import{V as k}from"./VContainer-DMYMalm8.js";const B={__name:"Home",emits:["hide-appbar","start-survey","restart-survey","continue-survey"],setup(N,{emit:d}){const o=d;x(()=>{o("hide-appbar"),localStorage.setItem("userProgress",JSON.stringify({currentStep:0})),console.log("set localStorage userProgress:",localStorage.getItem("userProgress"))}),v(()=>{});const c=y(!0);function g(){localStorage.setItem("appInitialized","false"),localStorage.setItem("surveyId",null),console.log("emitting start-survey event."),o("start-survey")}function m(){console.log("emitting continue-survey event.");const t=(JSON.parse(localStorage.getItem("userProgress"))||{}).currentStep||0;o("continue-survey",{currentStep:t}),console.log("Current Step sent with continue-survey:",t)}return(p,t)=>(l(),n(k,null,{default:e(()=>[s(a,{"no-gutters":"",justify:"center",class:"margin-88 | margin-top-100"},{default:e(()=>[s(_,{src:V,width:207,height:71,"min-width":"207px","min-height":"72px"})]),_:1}),s(a,{"no-gutters":"",justify:"center",class:"margin-88px | mt-2"},{default:e(()=>[s(S,{class:"title-text-sub"},{default:e(()=>t[0]||(t[0]=[r(" 한 장의 이미지로 룸메이트 구하기! ")])),_:1})]),_:1}),s(I,{class:"mx-auto | margin-top-72 | pt-2 pl-4 pr-4","max-width":"320",rounded:"lg"},{default:e(()=>[s(C,{class:"card-title-text"},{default:e(()=>[s(h,{icon:"mdi-information | pb-1 | mr-1"}),t[1]||(t[1]=r(" 응답내용 수집 안내 "))]),_:1}),s(b),s(w,null,{default:e(()=>t[2]||(t[2]=[i("div",{style:{"text-align":"center","letter-spacing":"-0.5px"}},[r(" 본 서비스는 품질 향상과 인사이트 도출을 위해 응답을 수집하여 통계 및 분석에 활용합니다. "),i("br"),r("위 내용은 해당 목적 외에는 사용되지 않으며, 관련 법령을 준수하여 안전하게 관리됩니다. ")],-1)])),_:1})]),_:1}),c.value?(l(),n(a,{key:0,"no-gutters":"",justify:"center",class:"margin-42 | mt-10"},{default:e(()=>[s(u,{onClick:g,variant:"flat",color:"#FF6161",rounded:"xl",size:"large",width:"100%",height:"52px",class:"text-btn"},{default:e(()=>t[3]||(t[3]=[r(" 시작하기 ")])),_:1})]),_:1})):(l(),n(a,{key:2,"no-gutters":"",justify:"center",class:"margin-42 | mt-2"},{default:e(()=>[s(u,{onClick:m,variant:"flat",color:"#FF6161",rounded:"xl",size:"large",width:"100%",height:"52px",class:"text-btn"},{default:e(()=>t[5]||(t[5]=[r(" 이어하기 ")])),_:1})]),_:1}))]),_:1}))}},F=f(B,[["__scopeId","data-v-6abb337f"]]);export{F as default};
