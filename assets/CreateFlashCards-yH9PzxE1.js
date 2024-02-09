import{r,j as t,b}from"./index-4Oo8qpm8.js";import{b as k,a as C}from"./reduxToolkit-od9T7kOg.js";import{P as S}from"./PaginationCard-6fe7VKYu.js";import{A as U}from"./AddToDictionaryButton-zPJBKCAp.js";const D="_createFlashcardWrapper_joudx_1",E="_widthMainConteiner_joudx_11",O="_imgPuzzle_joudx_15",M="_addAddict_joudx_33",L="_active_joudx_46",q="_form_joudx_50",R="_wrapperImgInput_joudx_70",T="_withoutImg_joudx_1",$="_checkBoxWithoutImageCustom_joudx_93",G="_inputFlashCard_joudx_116",Q="_inputFlashCardOption_joudx_117",J="_optionInputUrl_joudx_131",K="_addCard_joudx_148",Y="_activeImage_joudx_165",Z="_navBarPhotos_joudx_171",H="_imgPazzleUnit_joudx_178",V="_appearSmoothImage_joudx_1",X="_widthAutoPazzle_joudx_190",tt="_blurImage_joudx_194",et="_diactiveBt_joudx_199",at="_succesAddedCard_joudx_204",ot="_conteiner_joudx_214",st="_wordNotFound_joudx_230",e={createFlashcardWrapper:D,widthMainConteiner:E,imgPuzzle:O,addAddict:M,active:L,form:q,wrapperImgInput:R,withoutImg:T,checkBoxWithoutImageCustom:$,inputFlashCard:G,inputFlashCardOption:Q,optionInputUrl:J,addCard:K,activeImage:Y,navBarPhotos:Z,imgPazzleUnit:H,appearSmoothImage:V,widthAutoPazzle:X,blurImage:tt,diactiveBt:et,succesAddedCard:at,conteiner:ot,wordNotFound:st},rt="468Q8bMOgOGEE83ah-aDyPEulZLkL2xJoCUTexnRBFs",lt=()=>{const[n,l]=r.useState([]),[i,u]=r.useState(""),[s,c]=r.useState({word:"",url:"",description:""}),[p,h]=r.useState(null),[w,m]=r.useState(!1),[v,g]=r.useState(!1),[d,_]=r.useState(1),F=k(),f=async()=>{g(!1);try{const a=await C.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${s.word.toLowerCase().trim()}`).then(o=>o.data[0]);a&&(x(),_(1),h(a)),m(!1)}catch{g(!0)}},x=async()=>{try{await C.get(`https://api.unsplash.com/search/photos?per_page=12&page=${d}
                            &query=${s.word.toLowerCase().trim()}&client_id=${rt}`).then(a=>{l(a.data.results.map(o=>{var j;return(j=o.urls)==null?void 0:j.regular}))}).catch(()=>console.log("error search"))}catch{console.log("err")}};r.useEffect(()=>{n.length&&x()},[d]);const N=a=>{const o=a.target;o.tagName=="IMG"&&u(o.src)},z=a=>{const o=a.target;c({...s,word:o.value})},P=a=>{const o=a.target;c({...s,description:o.value})},y=a=>{const o=a.target;c({...s,url:o.value})},A=a=>{a.target.checked?c({...s,url:"./public/nophoto.webp"}):c({...s,url:""})},I=()=>{F(b({...s,imageChoise:i})),c({word:"",url:"",description:""}),m(!0),u(""),h(null),l([])},W=r.useMemo(()=>n.map((a,o)=>t.jsx("div",{className:e.imgPazzleUnit,children:t.jsx("img",{className:i==a?e.activeImage:i?e.blurImage:"",src:a,alt:"Image"})},a+o)),[n,i,d]),B=()=>n.length<12&&d==0?12:+d*12+12<61?+d*12+12:60;return t.jsxs("div",{className:n.length==0?e.createFlashcardWrapper+" "+e.widthMainConteiner:e.createFlashcardWrapper,children:[t.jsxs("div",{className:n.length?e.imgPuzzle:e.imgPuzzle+" "+e.widthAutoPazzle,onClick:N,children:[w?t.jsx("div",{className:e.succesAddedCard,children:t.jsx("div",{className:e.conteiner,children:t.jsx("span",{children:"Card was succesfully added"})})}):n.length>0&&W,n.length>0&&t.jsx("div",{className:e.navBarPhotos,children:t.jsx(S,{quantityWordsOnPage:12,quantityElems:B(),numberPage:d,setNumberPage:_,type:"photo"})})]}),t.jsx("button",{onClick:I,className:i?e.addAddict+" "+e.active:e.addAddict,children:"Add to flashcards"}),t.jsx("div",{className:e.form,children:t.jsxs("form",{children:[t.jsx("input",{onBlur:f,onInput:z,className:e.inputFlashCard,value:s.word,type:"text",placeholder:"Word"}),t.jsx("div",{className:e.wordNotFound,children:v&&"Word not found"}),t.jsxs("div",{className:e.optionInputUrl,children:[t.jsxs("label",{htmlFor:"descriptonIn",children:["Description",t.jsx("span",{children:"*"})]}),t.jsx("input",{onInput:P,className:e.inputFlashCardOption,value:s.description,type:"text",placeholder:"Text",id:"descriptonIn"}),t.jsxs("label",{htmlFor:"optionIN",children:["URL image ",t.jsx("span",{children:"*"})]}),t.jsx("input",{onInput:y,className:e.inputFlashCardOption,value:s.url,type:"text",placeholder:"URL",id:"optionIN"}),t.jsxs("div",{className:e.wrapperImgInput,children:[t.jsxs("label",{htmlFor:e.withoutImg,children:["Without image",t.jsx("span",{children:"*"})]}),t.jsx("input",{type:"checkbox",onChange:A,id:e.withoutImg}),t.jsx("span",{className:e.checkBoxWithoutImageCustom})]})]}),t.jsx("button",{className:s.word&&(i||s.url)?e.addCard:e.addCard+" "+e.diactiveBt,onClick:I,type:"button",children:"Add to flashcards"}),!!p&&t.jsx(U,{data:p,place:"flashcards"})]})})]})};export{lt as default};