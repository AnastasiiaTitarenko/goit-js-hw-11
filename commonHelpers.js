import{i,S as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="43303597-4cf3538acd20e5586f11f779c";function y(a){const s=new URLSearchParams({key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function h(a){return a.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:n,downloads:d})=>`
    <li class="galleryCard">
          <a href="${r}" class="lightbox-image">
            <img src="${s}" alt="${o}" class="picture-icon">
          </a>

          <div class="picture-info">
            
          <div>
              <span>Likes:</span>
              <span class="likes">${e}</span>
            </div>
            
            <div>
              <span>Views:</span>
              <span class="views">${t}</span>
            </div>
            
            <div>
              <span>Comments:</span>
              <span class="comments">${n}</span>
            </div>
           
            <div>
              <span>Downloads:</span>
              <span class="downloads">${d}</span>
            </div>
          </div>

        </li>`).join("")}document.getElementById("search-btn");const l=document.getElementById("search-form");document.querySelector("[picture]");const u=document.getElementById("gallery");l.addEventListener("submit",g);function c(){u.innerHTML=""}function g(a){a.preventDefault();const{picture:s}=a.currentTarget;loader.style.display="block",c(),y(s.value).then(r=>{r.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(u.innerHTML=h(r.hits),v.refresh())}).catch(r=>{i.error({title:"Error",message:"Error. Please try again!"}),c()}).finally(()=>{loader.style.display="none",l.reset()})}const v=new p(".galleryCard a",{captionType:"attr",captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
