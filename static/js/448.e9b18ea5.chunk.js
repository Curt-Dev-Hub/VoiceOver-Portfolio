"use strict";(self.webpackChunkvo_portfolio=self.webpackChunkvo_portfolio||[]).push([[448],{859:function(e,r,a){a.r(r),a.d(r,{default:function(){return g}});var n,t=a(439),i=a(791),o={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},c=new Uint8Array(16);function s(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(c)}for(var d=[],u=0;u<256;++u)d.push((u+256).toString(16).slice(1));function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return d[e[r+0]]+d[e[r+1]]+d[e[r+2]]+d[e[r+3]]+"-"+d[e[r+4]]+d[e[r+5]]+"-"+d[e[r+6]]+d[e[r+7]]+"-"+d[e[r+8]]+d[e[r+9]]+"-"+d[e[r+10]]+d[e[r+11]]+d[e[r+12]]+d[e[r+13]]+d[e[r+14]]+d[e[r+15]]}var m=function(e,r,a){if(o.randomUUID&&!r&&!e)return o.randomUUID();var n=(e=e||{}).random||(e.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){a=a||0;for(var t=0;t<16;++t)r[a+t]=n[t];return r}return p(n)},l=a.p+"static/media/FunkyAccent1.cbaa15cb181b06935ce1.mp3",f=a.p+"static/media/Distinguished_Voice.6fb3658b8bff398e90f2.mp3",h=a.p+"static/media/FunZone_CharacterAdvert.11e7e27576870ab90583.mp3",y=a.p+"static/media/Mature Gent_Advert.ea8bc6772bbab7a8cc32.mp3",v=a.p+"static/media/Surfer_Guy.532842c512b826cc79ef.mp3",b=a.p+"static/media/Glaucoma_Explainer.c4c6af01f545f49db2d0.mp3",x=a(184),j=[{id:1,name:"Animation",audioSrc:f},{id:2,name:"Accents",audioSrc:l},{id:3,name:"Character",audioSrc:[h,y,v]},{id:4,name:"Explainer",audioSrc:b}];function w(e){var r=e.style,a=(0,i.useState)("Animation"),n=(0,t.Z)(a,2),o=n[0],c=n[1];return(0,i.useEffect)((function(){c(r)}),[r]),(0,x.jsxs)("div",{className:"audio-wrapper",children:[(0,x.jsx)("h3",{className:"demo-h2",children:"Play audio samples here"}),(0,x.jsx)("div",{className:"media-player-wrap",children:j.map((function(e){return e.name===o&&(Array.isArray(e.audioSrc)?e.audioSrc.map((function(e){return(0,x.jsx)("audio",{controls:!0,children:(0,x.jsx)("source",{src:e,type:"audio/mpeg"})},m())})):(0,x.jsx)("audio",{controls:!0,children:(0,x.jsx)("source",{src:e.audioSrc,type:"audio/mpeg"})},e.id))}))})]})}var S=["Animation","Character","eLearning","Explainer","Accents","Narration","Video_Game"];function g(){var e=(0,i.useState)("Animation"),r=(0,t.Z)(e,2),a=r[0],n=r[1];return(0,x.jsxs)("div",{className:"demo-wrapper",children:[(0,x.jsx)("h2",{children:"Hear some of my voice samples"}),(0,x.jsxs)("div",{className:"inner-wrapper",children:[(0,x.jsxs)("div",{className:"buttons-wrapper",children:[(0,x.jsx)("h3",{className:"demo-h2",children:"Select a style \u2b07\ufe0f"}),S.map((function(e,r){return(0,x.jsxs)("button",{autoFocus:0===r,className:"voice-style-btn",onClick:function(){return function(e){if(n(e),window.innerWidth<632){var r=document.querySelector(".audio-wrapper");r&&window.scrollTo({top:r.offsetTop,behavior:"smooth"})}}(e)},children:[" ",e," "]},e)}))]}),a&&(0,x.jsx)(w,{style:a})]})]})}}}]);
//# sourceMappingURL=448.e9b18ea5.chunk.js.map