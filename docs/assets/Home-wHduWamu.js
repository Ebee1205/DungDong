import{_ as x,o as y,a as V,r as d,c as n,b as o,w as t,d as a,V as _,e as C,f as r,g as I,h as s,i as S,j as h,k,l as w,m as c,n as b,p as u,q as B}from"./index-B9Vm7Y-1.js";import{V as j}from"./VContainer-j9spbTpw.js";const z={__name:"Home",emits:["hide-appbar","start-survey","restart-survey","continue-survey"],setup(N,{emit:g}){const l=g;y(()=>{l("hide-appbar"),localStorage.setItem("userProgress",JSON.stringify({currentStep:0})),console.log("set localStorage userProgress:",localStorage.getItem("userProgress")),localStorage.getItem("appInitialized")==="true"?i.value=!0:i.value=!1}),V(()=>{});const m=d(!0),i=d(!1);function f(){localStorage.setItem("appInitialized","false"),localStorage.setItem("surveyId",null),console.log("emitting start-survey event."),l("start-survey")}function p(){localStorage.setItem("appInitialized","false"),localStorage.setItem("surveyId",null),console.log("emitting restart-survey event."),l("restart-survey")}function v(){console.log("emitting continue-survey event."),l("continue-survey")}return(F,e)=>(o(),n(j,null,{default:t(()=>[a(r,{"no-gutters":"",justify:"center",class:"margin-88 | margin-top-100"},{default:t(()=>[a(_,{src:C,width:207,height:71,"min-width":"207px","min-height":"72px"})]),_:1}),a(r,{"no-gutters":"",justify:"center",class:"margin-88px | mt-2"},{default:t(()=>[a(I,{class:"title-text-sub"},{default:t(()=>e[0]||(e[0]=[s(" 한 장의 이미지로 룸메이트 구하기! ")])),_:1})]),_:1}),a(b,{class:"mx-auto | margin-top-72 | pt-2 pl-4 pr-4","max-width":"320",rounded:"lg"},{default:t(()=>[a(S,{class:"card-title-text"},{default:t(()=>[a(h,{icon:"mdi-information | pb-1 | mr-1"}),e[1]||(e[1]=s(" 응답내용 수집 안내 "))]),_:1}),a(k),a(w,null,{default:t(()=>e[2]||(e[2]=[c("div",{style:{"text-align":"center","letter-spacing":"-0.5px"}},[s(" 본 서비스는 품질 향상과 인사이트 도출을 위해 응답을 수집하여 통계 및 분석에 활용합니다. "),c("br"),s("위 내용은 해당 목적 외에는 사용되지 않으며, 관련 법령을 준수하여 안전하게 관리됩니다. ")],-1)])),_:1})]),_:1}),m.value?(o(),n(r,{key:0,"no-gutters":"",justify:"center",class:"margin-42 | mt-10"},{default:t(()=>[a(u,{onClick:f,variant:"flat",color:"#FF6161",rounded:"xl",size:"large",width:"100%",height:"52px",class:"text-btn"},{default:t(()=>e[3]||(e[3]=[s(" 시작하기 ")])),_:1})]),_:1})):(o(),n(r,{key:1,"no-gutters":"",justify:"center",class:"margin-42 | mt-10"},{default:t(()=>[a(u,{onClick:p,variant:"flat",color:"#666666",rounded:"xl",size:"large",width:"100%",height:"52px",class:"text-btn"},{default:t(()=>e[4]||(e[4]=[s(" 다시 시작 ")])),_:1})]),_:1})),i.value?(o(),n(r,{key:2,"no-gutters":"",justify:"center",class:"margin-42 | mt-2"},{default:t(()=>[a(u,{onClick:v,variant:"flat",color:"#FF6161",rounded:"xl",size:"large",width:"100%",height:"52px",class:"text-btn"},{default:t(()=>e[5]||(e[5]=[s(" 이어하기 ")])),_:1})]),_:1})):B("",!0)]),_:1}))}},H=x(z,[["__scopeId","data-v-c7df74d8"]]);export{H as default};
