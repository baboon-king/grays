(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i=()=>{},d=(o,t)=>`.${o} {
        filter: grayscale(${t}%);
        -webkit-filter: grayscale(${t}%);
        -moz-filter: grayscale(${t}%);
        -ms-filter: grayscale(${t}%);
        -o-filter: grayscale(${t}%);
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
        filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=.${t});
        -webkit-filter: grayscale(.${t})
    }
`,a={apply:i,cancel:i},u=(o,t)=>{const n=document.createElement("style");n.innerHTML=d(o,t),document.head.append(n)},m=(o="html",t=99,n={})=>{const s=document.querySelector(o);if(!s)return a;const{className:e="grays",expire:r,immediate:l=!0}=n;if(!(r?Date.now()<=r:!0))return a;u(e,t);const c=()=>s.classList.add(e),f=()=>s.classList.remove(e);return l&&c(),{apply:c,cancel:f}},{cancel:y,apply:p}=m("html",90);window.__cancel=y;window.__apply=p;
