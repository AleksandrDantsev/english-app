import{j as n}from"./index-IDKOnNZl.js";const g="_nav_11h64_1",v="_navElems_11h64_8",_="_activePage_11h64_26",e={nav:g,navElems:v,activePage:_},x=({numberPage:s,quantityElems:c,setNumberPage:i,quantityWordsOnPage:r,type:o})=>{const l=new Array(Math.ceil(c/r)).fill(0).map((a,t)=>String(o?t+1:t)),m=a=>{const t=a.target;t.tagName=="LI"&&t.textContent&&i(Number(t.textContent))};return n.jsx("div",{className:e.nav,children:n.jsx("ul",{onClick:m,className:e.navElems,children:l.map(a=>n.jsx("li",{className:s==+a?e.activePage:"",children:a},a))})})};export{x as P};
