import{i as d,S as u}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const m=document.querySelector(".body-elements"),i=document.querySelector(".images-list"),l=document.querySelector(".loader"),p="https://pixabay.com/api/",f="27271649-0bf2f3b05194a9267cfa0a660",o=new URL(p);o.searchParams.append("key",f);o.searchParams.append("image_type","photo");o.searchParams.append("orientation","horizontal");o.searchParams.append("safesearch","true");o.searchParams.append("q","cat");l.style.display="none";m.addEventListener("submit",a=>{a.preventDefault(),l.style.display="block",i.innerHTML="";const e=a.currentTarget.elements.inputValue.value;g(e),a.currentTarget.reset()});function h(a){return o.searchParams.set("q",a),fetch(o).then(e=>{if(e.ok)return e.json();throw new Error("Request is ot OK.")}).catch(e=>{throw new Error("Error fetching Data.")})}function g(a){h(a).then(e=>{i.insertAdjacentHTML("afterbegin",y(e)),L.refresh(),e.hits.length===0&&d.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{alert(e)})}function y(a){return a.hits.reduce((c,s)=>(c+=`
            <div class="card gallery">
                    
                <a class="large-img" href="${s.largeImageURL}">
                    <img width="300" height="200" alt="${s.tags}" src="${s.webformatURL}">
                </a>

                <div class="card-elems">
                    <div class="card-text-el">
                        <h2 class="card-title">Likes</h2>
                        <p class="card-text">${s.likes}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Views</h2>
                        <p class="card-text">${s.views}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Comments</h2>
                        <p class="card-text">${s.comments}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Downloads</h2>
                        <p class="card-text">${s.downloads}</p>
                    </div>
                </div>
            </div>
        `,c),"")}const L=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
