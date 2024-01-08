import{i}from"./assets/vendor-4d6948b9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const l=document.querySelector(".body-elements"),d=document.querySelector(".images-list"),u="https://pixabay.com/api/",m="27271649-0bf2f3b05194a9267cfa0a660",c=new URL(u);c.searchParams.append("key",m);c.searchParams.append("image_type","photo");c.searchParams.append("orientation","horizontal");c.searchParams.append("safesearch","true");c.searchParams.append("q","cat");l.addEventListener("submit",a=>{a.preventDefault();const e=a.currentTarget.elements.inputValue.value;p(e)});function f(a){return c.searchParams.set("q",a),fetch(c).then(e=>{if(e.ok)return e.json();throw new Error("Request is ot OK.")}).catch(e=>{throw new Error("Error fetching Data.")})}function p(a){f(a).then(e=>{d.insertAdjacentHTML("afterbegin",h(e)),e.hits.length===0&&i.error({position:"center",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{alert(e)})}function h(a){return a.hits.reduce((o,s)=>(o+=`
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
        `,o),"")}
//# sourceMappingURL=commonHelpers.js.map
