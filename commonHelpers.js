import{i,S as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(n){const r="https://pixabay.com/api/",s="43303597-4cf3538acd20e5586f11f779c",a=new URLSearchParams({key:s,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function f(n){return n.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:o,downloads:u})=>`
    <li class="galleryCard">
          <a href="${s}" class="lightbox-image">
            <img src="${r}" alt="${a}" class="picture-icon">
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
              <span class="comments">${o}</span>
            </div>
           
            <div>
              <span>Downloads:</span>
              <span class="downloads">${u}</span>
            </div>
          </div>

        </li>`).join("")}document.getElementById("search-btn");const l=document.getElementById("search-form");document.querySelector("[picture]");document.getElementById("gallery");l.addEventListener("submit",m);function c(){gallery.innerHTML=""}function m(n){n.preventDefault();const{picture:r}=n.currentTarget;loader.style.display="block",c(),p(r.value).then(s=>{if(s.hits.length===0)i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});else{a.innerHTML=f(s.hits);const a=new d(".galleryCard a",{captionType:"attr",captionsData:"alt",captionDelay:250})}}).catch(s=>{i.error({title:"Error",message:"Error. Please try again!"}),c()}).finally(()=>{loader.style.display="none",l.reset()})}
//# sourceMappingURL=commonHelpers.js.map
