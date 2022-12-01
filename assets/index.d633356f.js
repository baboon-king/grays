(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=(o,t)=>`.${o} {
        filter: grayscale(${t}%);
        -webkit-filter: grayscale(${t}%);
        -moz-filter: grayscale(${t}%);
        -ms-filter: grayscale(${t}%);
        -o-filter: grayscale(${t}%);
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
        filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=.${t});
        -webkit-filter: grayscale(.${t})
    }
`,d=(o,t)=>{const s=document.createElement("style");s.innerHTML=f(o,t),document.head.append(s)},c=(o,t)=>{const s=document.querySelector(o);if(!s)throw new Error(`selector: "${o}" does not exist`);t(s)},m=(o="html",t=99,s={})=>{const{className:n="grays",expire:e,immediate:r=!0}=s;d(n,t);const i=()=>{c(o,l=>l.classList.add(n))},a=()=>{c(o,l=>l.classList.remove(n))};return r&&(e?Date.now()<=e:!0)&&i(),{apply:i,cancel:a}},{cancel:u,apply:y}=m("html",90);window.__cancel=u;window.__apply=y;
