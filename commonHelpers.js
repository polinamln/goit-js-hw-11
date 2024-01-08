import{i,S as l}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const d=document.querySelector(".body-elements"),u=document.querySelector(".images-list"),m="https://pixabay.com/api/",f="27271649-0bf2f3b05194a9267cfa0a660",o=new URL(m);o.searchParams.append("key",f);o.searchParams.append("image_type","photo");o.searchParams.append("orientation","horizontal");o.searchParams.append("safesearch","true");o.searchParams.append("q","cat");d.addEventListener("submit",s=>{s.preventDefault();const e=s.currentTarget.elements.inputValue.value;h(e),y.refresh()});function p(s){return o.searchParams.set("q",s),fetch(o).then(e=>{if(e.ok)return e.json();throw new Error("Request is ot OK.")}).catch(e=>{throw new Error("Error fetching Data.")})}function h(s){p(s).then(e=>{u.insertAdjacentHTML("afterbegin",g(e)),e.hits.length===0&&i.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{alert(e)})}function g(s){return s.hits.reduce((c,a)=>(c+=`
            <div class="card gallery">
                    
                <a class="large-img" href="${a.largeImageURL}">
                    <img width="300" height="200" alt="${a.tags}" src="${a.webformatURL}">
                </a>

                <div class="card-elems">
                    <div class="card-text-el">
                        <h2 class="card-title">Likes</h2>
                        <p class="card-text">${a.likes}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Views</h2>
                        <p class="card-text">${a.views}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Comments</h2>
                        <p class="card-text">${a.comments}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Downloads</h2>
                        <p class="card-text">${a.downloads}</p>
                    </div>
                </div>
            </div>
        `,c),"")}const y=new l(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
