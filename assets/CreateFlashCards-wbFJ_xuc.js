import{r,j as e,b as A}from"./index-hYH-XdOC.js";import{u as W,b as g}from"./reduxToolkit-GDv5Ah80.js";import{P as b}from"./PaginationCard-Z9pGQBS3.js";const S="_createFlashcardWrapper_14dph_1",B="_widthMainConteiner_14dph_11",U="_imgPuzzle_14dph_15",E="_addAddict_14dph_33",M="_active_14dph_46",O="_form_14dph_50",D="_inputFlashCard_14dph_70",L="_inputFlashCardOption_14dph_71",k="_optionInputUrl_14dph_85",q="_addCard_14dph_102",$="_activeImage_14dph_119",R="_navBarPhotos_14dph_125",T="_imgPazzleUnit_14dph_132",G="_appearSmoothImage_14dph_1",Q="_widthAutoPazzle_14dph_144",J="_blurImage_14dph_148",K="_diactiveBt_14dph_153",Y="_succesAddedCard_14dph_158",Z="_conteiner_14dph_167",H="_wordNotFound_14dph_183",t={createFlashcardWrapper:S,widthMainConteiner:B,imgPuzzle:U,addAddict:E,active:M,form:O,inputFlashCard:D,inputFlashCardOption:L,optionInputUrl:k,addCard:q,activeImage:$,navBarPhotos:R,imgPazzleUnit:T,appearSmoothImage:G,widthAutoPazzle:Q,blurImage:J,diactiveBt:K,succesAddedCard:Y,conteiner:Z,wordNotFound:H},V="468Q8bMOgOGEE83ah-aDyPEulZLkL2xJoCUTexnRBFs",at=()=>{const[n,C]=r.useState([]),[i,l]=r.useState(""),[o,c]=r.useState({word:"",url:"",description:""}),[I,p]=r.useState(!1),[w,h]=r.useState(!1),[d,u]=r.useState(1),v=W(),x=async()=>{h(!1);try{await g.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${o.word.toLowerCase().trim()}`).then(s=>s.data[0])&&(m(),u(1)),p(!1)}catch{h(!0)}},F=r.useMemo(()=>window.innerWidth<700?"small":"regular",[]),m=async()=>{try{await g.get(`https://api.unsplash.com/search/photos?per_page=12&page=${d}
                            &query=${o.word.toLowerCase().trim()}&client_id=${V}`).then(a=>{console.log(a.data),C(a.data.results.map(s=>s.urls[F]))}).catch(()=>console.log("error search"))}catch{console.log("err")}};r.useEffect(()=>{n.length&&m()},[d]);const f=a=>{const s=a.target;s.tagName=="IMG"&&l(s.src)},z=a=>{const s=a.target;c({...o,word:s.value})},P=a=>{const s=a.target;c({...o,description:s.value})},N=a=>{const s=a.target;c({...o,url:s.value})},_=()=>{v(A({...o,imageChoise:i})),c({word:"",url:"",description:""}),p(!0),l("")},j=r.useMemo(()=>n.map((a,s)=>e.jsx("div",{className:t.imgPazzleUnit,children:e.jsx("img",{className:i==a?t.activeImage:i?t.blurImage:"",src:a,alt:"Image"})},a+s)),[n,i,d]),y=()=>n.length<12&&d==0?12:+d*12+12<61?+d*12+12:60;return e.jsxs("div",{className:n.length==0?t.createFlashcardWrapper+" "+t.widthMainConteiner:t.createFlashcardWrapper,children:[e.jsxs("div",{className:n.length?t.imgPuzzle:t.imgPuzzle+" "+t.widthAutoPazzle,onClick:f,children:[I?e.jsx("div",{className:t.succesAddedCard,children:e.jsx("div",{className:t.conteiner,children:e.jsx("span",{children:"Card was succesfully added"})})}):n.length>0&&j,n.length>0&&e.jsx("div",{className:t.navBarPhotos,children:e.jsx(b,{quantityWordsOnPage:12,quantityElems:y(),numberPage:d,setNumberPage:u,type:"photo"})})]}),e.jsx("button",{onClick:_,className:i?t.addAddict+" "+t.active:t.addAddict,children:"Add to flashcards"}),e.jsx("div",{className:t.form,children:e.jsxs("form",{children:[e.jsx("input",{onBlur:x,onInput:z,className:t.inputFlashCard,value:o.word,type:"text",placeholder:"Word"}),w&&e.jsx("div",{className:t.wordNotFound,children:"Word not found"}),e.jsxs("div",{className:t.optionInputUrl,children:[e.jsxs("label",{htmlFor:"descriptonIn",children:["Description",e.jsx("span",{children:"*"})]}),e.jsx("input",{onInput:P,className:t.inputFlashCardOption,value:o.description,type:"text",placeholder:"Text",id:"descriptonIn"}),e.jsxs("label",{htmlFor:"optionIN",children:["url image ",e.jsx("span",{children:"*"})]}),e.jsx("input",{onInput:N,className:t.inputFlashCardOption,value:o.url,type:"text",placeholder:"URL",id:"optionIN"})]}),e.jsx("button",{className:o.word&&(i||o.url)?t.addCard:t.addCard+" "+t.diactiveBt,onClick:_,type:"button",children:"Add to flashcards"})]})})]})};export{at as default};
