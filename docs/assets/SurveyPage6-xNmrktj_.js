import{B as S,V as o,_ as b}from"./VLabel-I-VSK6ae.js";import{_ as v,r as g,o as F,a as k,s as c,c as V,w as l,b as _,d as e,h as a,f as r}from"./index-B9Vm7Y-1.js";import{V as p}from"./VSlider-CFL74RlN.js";import"./VInput-WdtBXLUj.js";const x="일상생활",w="사소하지만 빼먹을 수 없는 몇 가지만 마지막으로 확인해 볼게요.",j={__name:"SurveyPage6",setup(z){const n=g(0),i=g(0),d=g(0);F(()=>{y()}),k(()=>{}),c(n,(s,t)=>{console.log(`--- noise changed from ${t} to ${s}`),f("noise",s)}),c(i,(s,t)=>{console.log(`--- share changed from ${t} to ${s}`),f("share",s)}),c(d,(s,t)=>{console.log(`--- home changed from ${t} to ${s}`),f("home",s)});function y(){localStorage.setItem("userProgress",JSON.stringify({currentStep:6})),console.log("Updated localStorage userProgress:",localStorage.getItem("userProgress"));const s=localStorage.getItem("userSurvey");if(s){const t=JSON.parse(s);n.value=t.noise||0,i.value=t.share||0,d.value=t.home||0}}function f(s,t){const m=JSON.parse(localStorage.getItem("userSurvey"))||{};m[s]=t,localStorage.setItem("userSurvey",JSON.stringify(m)),console.log(`Updated localStorage userSurvey: ${s} = ${t}`)}return(s,t)=>{const m=b;return _(),V(S,null,{default:l(()=>[e(m,{title:x,desc:w}),e(r,{"no-gutters":"",justify:"start"},{default:l(()=>[e(o,null,{default:l(()=>t[3]||(t[3]=[a("소음은 어디까지 허용하나요?")])),_:1})]),_:1}),e(r,{"no-gutters":"",justify:"center",class:"mt-3"},{default:l(()=>[e(p,{max:4,step:1,modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16","hide-details":""},null,8,["modelValue"])]),_:1}),e(r,{"no-gutters":"",class:"justify-space-between | pt-2"},{default:l(()=>[e(o,{class:"small-label"},{default:l(()=>t[4]||(t[4]=[a("항상 이어폰")])),_:1}),e(o,{class:"small-label"},{default:l(()=>t[5]||(t[5]=[a("작은소리 허용")])),_:1}),e(o,{class:"small-label"},{default:l(()=>t[6]||(t[6]=[a("스피커 모드")])),_:1})]),_:1}),e(r,{"no-gutters":"",justify:"start",class:"margin-top-42"},{default:l(()=>[e(o,null,{default:l(()=>t[7]||(t[7]=[a("룸메와의 물건 공유에 대해 민감한가요?")])),_:1})]),_:1}),e(r,{"no-gutters":"",justify:"center",class:"mt-3"},{default:l(()=>[e(p,{max:4,step:1,modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=u=>i.value=u),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16","hide-details":""},null,8,["modelValue"])]),_:1}),e(r,{"no-gutters":"",class:"justify-space-between | pt-2"},{default:l(()=>[e(o,{class:"small-label"},{default:l(()=>t[8]||(t[8]=[a("전혀 안함")])),_:1}),e(o,{class:"small-label"},{default:l(()=>t[9]||(t[9]=[a("공동물품 구비")])),_:1}),e(o,{class:"small-label"},{default:l(()=>t[10]||(t[10]=[a("완전 공유")])),_:1})]),_:1}),e(r,{"no-gutters":"",justify:"start",class:"margin-top-42"},{default:l(()=>[e(o,null,{default:l(()=>t[11]||(t[11]=[a("방은 얼마나 자주 비우시나요?")])),_:1})]),_:1}),e(r,{"no-gutters":"",justify:"center",class:"mt-3"},{default:l(()=>[e(p,{max:4,step:1,modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=u=>d.value=u),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16","hide-details":""},null,8,["modelValue"])]),_:1}),e(r,{"no-gutters":"",class:"justify-space-between | pt-2"},{default:l(()=>[e(o,{class:"small-label"},{default:l(()=>t[12]||(t[12]=[a("잘 안들어옴")])),_:1}),e(o,{class:"small-label"},{default:l(()=>t[13]||(t[13]=[a("매주마다")])),_:1}),e(o,{class:"small-label"},{default:l(()=>t[14]||(t[14]=[a("상시 거주중")])),_:1})]),_:1})]),_:1})}}},U=v(j,[["__scopeId","data-v-3590071c"]]);export{U as default};
