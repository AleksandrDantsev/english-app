import{j as e,r as t,c as W,_ as C,L as k}from"./index-IDKOnNZl.js";import{D as f}from"./Definiton-2p4Y3ZTW.js";import{b as P,a as N,u as L}from"./reduxToolkit-TRL6_BfL.js";import{P as b}from"./PaginationCard-wkg3KOyf.js";const B="_wrapperDictionary_zywxu_1",q="_dictionaryCards_zywxu_8",E="_topLineDictionary_zywxu_12",T="_quantityWords_zywxu_17",A="_inputSearcWord_zywxu_29",F="_emptyDictWrapper_zywxu_40",z="_emptyTitle_zywxu_48",y={wrapperDictionary:B,dictionaryCards:q,topLineDictionary:E,quantityWords:T,inputSearcWord:A,emptyDictWrapper:F,emptyTitle:z},I="_dictioanryCard_x4xd8_1",$="_word_x4xd8_15",M="_wordTitle_x4xd8_24",O="_phonetics_x4xd8_31",H="_transcription_x4xd8_38",Q="_def_x4xd8_47",R="_dictionaryDate_x4xd8_55",V="_deleteWord_x4xd8_59",X="_audio_x4xd8_69",p={dictioanryCard:I,word:$,wordTitle:M,phonetics:O,transcription:H,def:Q,dictionaryDate:R,deleteWord:V,audio:X},Y="_sideBardDesc_14wna_1",Z="_hideDescBar_14wna_13",G="_sidebarWrapper_14wna_32",g={sideBardDesc:Y,hideDescBar:Z,sidebarWrapper:G},J=({information:n,setIsShowDefinitionBar:u})=>{const c=()=>{u(!1)};return e.jsxs("div",{className:g.sideBardDesc,children:[e.jsx("span",{className:g.hideDescBar,onClick:c,children:e.jsxs("svg",{fill:"#787878",height:"15px",width:"15px",viewBox:"0 0 490 490",stroke:"#787878",children:[e.jsx("g",{strokeWidth:"0"}),e.jsx("g",{strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("g",{children:[" ",e.jsx("polygon",{points:"456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "})," "]})]})}),e.jsxs("div",{className:g.sidebarWrapper,children:[e.jsx(f,{typeDef:"adjective",data:n,typeSearch:"definition"}),e.jsx(f,{typeDef:"noun",data:n,typeSearch:"definition"}),e.jsx(f,{typeDef:"verb",data:n,typeSearch:"definition"}),e.jsx(f,{typeDef:"adverb",data:n,typeSearch:"definition"})]})]})},K="_audioWord_m8n5u_1",U="_animationSoundPlayClass_m8n5u_10",ee="_animationSoundPlay_m8n5u_10",te="_pronCountry_m8n5u_14",D={audioWord:K,animationSoundPlayClass:U,animationSoundPlay:ee,pronCountry:te},w=({audioString:n})=>{const[u,c]=t.useState(!1),a=t.useMemo(()=>{var r;if(n.length){for(let o=0;o<n.length;o++)if(n[o].audio.endsWith("us.mp3"))return n[o].audio;return(r=n.find(o=>o.audio!=""))==null?void 0:r.audio}},[n]),i=()=>{c(!0);const r=new Audio(a);r.play(),r.onended=()=>c(!1)},l=()=>{var d;const r=["us","uk","en","au"];for(let o=0;o<r.length;o++)if((d=a==null?void 0:a.toLowerCase())!=null&&d.includes(r[o]))return r[o]};return e.jsx(t.Fragment,{children:!!a&&e.jsxs("div",{onClick:i,className:D.audioWord,children:[e.jsxs("svg",{className:u?D.animationSoundPlayClass:"",width:"30px",height:"30px",viewBox:"-0.5 0 25 25",fill:"none",stroke:"#6e6e6e",children:[e.jsx("g",{strokeWidth:"0"}),e.jsx("g",{strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("g",{children:[" ",e.jsx("path",{d:"M12.5493 4.50005C11.3193 4.04005 8.70926 5.49996 6.54926 7.40996H4.94922C3.88835 7.40996 2.87093 7.83145 2.12079 8.58159C1.37064 9.33174 0.949219 10.3491 0.949219 11.41V13.41C0.949219 14.4708 1.37064 15.4883 2.12079 16.2385C2.87093 16.9886 3.88835 17.41 4.94922 17.41H6.54926C8.65926 19.35 11.2693 20.78 12.5493 20.33C14.6493 19.55 14.9992 15.33 14.9992 12.41C14.9992 9.48996 14.6493 5.28005 12.5493 4.50005Z",stroke:"#6e6e6e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M20.6602 6.71997C22.1593 8.22011 23.0015 10.2542 23.0015 12.375C23.0015 14.4958 22.1593 16.5299 20.6602 18.03",stroke:"#6e6e6e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M18.5391 15.95C19.4764 15.0123 20.003 13.7407 20.003 12.4149C20.003 11.0891 19.4764 9.81764 18.5391 8.88",stroke:"#2b2b2b",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]}),e.jsx("span",{className:D.pronCountry,children:l()})]})})},ne=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),se=t.memo(({word:n,audio:u,phonetic:c,definition:a,allInfoAboutWord:i,date:l})=>{const r=P(),[d,o]=t.useState(!1),[s,x]=t.useState(!1),m=()=>{o(!0)},h=()=>{r(W(n))},j=t.useMemo(()=>a.length>150?a.slice(0,150)+"...":a,[a]),S=v=>{v.stopPropagation(),v.target.closest("."+p.audio)||x(!s)};return e.jsxs(t.Fragment,{children:[d&&e.jsx(J,{setIsShowDefinitionBar:o,information:i}),e.jsxs("div",{className:p.dictioanryCard,onClick:S,children:[e.jsxs("div",{className:p.wordTitle,children:[e.jsx("div",{className:p.word,onClick:m,children:n}),e.jsx("div",{className:p.dictionaryDate,children:l}),c&&e.jsx("div",{className:p.transcription,children:c})]}),e.jsxs("div",{className:p.phonetics,children:[e.jsx("div",{className:p.def,children:s?a:j}),e.jsx("div",{className:p.audio,children:e.jsx(w,{audioString:u})}),e.jsx("div",{onClick:h,className:p.deleteWord,children:"x"})]})]})]})}),oe="_panelPronWord_i105q_1",ie="_transcription_i105q_13",re="_notFound_i105q_25",ae="_wrapper_i105q_35",_={panelPronWord:oe,transcription:ie,notFound:re,wrapper:ae},ce=t.lazy(()=>C(()=>Promise.resolve().then(()=>ne),void 0)),de=()=>{const[n,u]=t.useState(""),[c,a]=t.useState({x:0,y:0}),[i,l]=t.useState(),[r,d]=t.useState(!1),[o,s]=t.useState([]);return t.useEffect(()=>{(async()=>{try{await N.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${n}`).then(x=>{l(x.data[0]),s(x.data[0].phonetics)}).catch(()=>{l(void 0),s([])})}catch{console.log("error")}})()},[n]),t.useEffect(()=>{function x(h){if(window.getSelection().toString().length>2){let j=window.getSelection();a({x:h.clientX,y:h.clientY}),d(!0),u(j.toString().toLowerCase().trim())}}function m(h){h.stopPropagation(),h.target.closest(_.panelPronWord)||d(!1)}return document.addEventListener("click",m),document.addEventListener("dblclick",x),()=>{document.removeEventListener("click",m),document.removeEventListener("dblclick",x)}},[]),e.jsx(t.Fragment,{children:r&&e.jsx("div",{className:_.panelPronWord,style:{left:c.x+"px",top:c.y+"px"},children:e.jsx("div",{className:_.wrapper,children:o.length>0||i!=null&&i.phonetic?e.jsxs(t.Fragment,{children:[!!(i!=null&&i.phonetic)&&e.jsx("div",{className:_.transcription,children:e.jsx("span",{children:i==null?void 0:i.phonetic})}),e.jsx(ce,{audioString:o})]}):e.jsx("div",{className:_.notFound,children:"Not found"})})})})},he=()=>{const[n,u]=t.useState(""),[c,a]=t.useState(0),i=15,l=L(s=>s.dictionary.dictionaryList),r=t.useMemo(()=>[...l].reverse(),[l]),d=n!=""&&r.filter(s=>s.word.includes(n)),o=s=>{u(s.target.value.toLowerCase())};return e.jsx("div",{className:y.wrapperDictionary,children:l.length>0?e.jsxs(t.Fragment,{children:[e.jsx(de,{}),e.jsxs("div",{className:y.topLineDictionary,children:[e.jsx("input",{className:y.inputSearcWord,placeholder:"Search",onInput:o,type:"text"}),e.jsx("div",{className:y.quantityWords,children:e.jsxs("span",{children:["Words: ",l.length]})})]}),e.jsx("div",{className:y.dictionaryCards,children:(d||r.slice(c*i,c*i+i)).map(s=>e.jsx(se,{word:s.word,date:s.date,phonetic:s.phonetic,audio:s.phonetics,definition:s.meanings[0].definitions[0].definition,allInfoAboutWord:s},s.word))}),r.length>5&&!d&&e.jsx(b,{quantityWordsOnPage:i,setNumberPage:a,numberPage:c,quantityElems:r.length})]}):e.jsx("div",{className:y.emptyDictWrapper,children:e.jsx("div",{className:y.emptyTitle,children:e.jsxs("h1",{children:["Dictionary is empty. Add at least one word from ",e.jsx(k,{to:"/translator",children:'"Translator"'})]})})})})};export{he as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}