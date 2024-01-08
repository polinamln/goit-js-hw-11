import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.body-elements')
const imagesList = document.querySelector('.images-list');

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = "27271649-0bf2f3b05194a9267cfa0a660"
const url = new URL(BASE_URL);
url.searchParams.append("key", API_KEY)
url.searchParams.append('image_type', 'photo')
url.searchParams.append('orientation', 'horizontal')
url.searchParams.append('safesearch', 'true')
url.searchParams.append('q', 'cat')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = event.currentTarget.elements.inputValue.value;

    renderImages(query);
})

function getImage (quary) {
    url.searchParams.set('q', quary);
    return fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Request is ot OK.')
            }
        }).catch(error => {
            throw new Error('Error fetching Data.')
        })
};

function renderImages(quary) {
    getImage(quary)
        .then(image => {
            imagesList.insertAdjacentHTML("afterbegin", createImageHTML(image))
            if (image.hits.length === 0) {
                iziToast.error({
                    position: 'center',
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
});
            }
        })
        .catch(error => {
        alert(error)
    })
    
};

function createImageHTML(image) {
    const imagesHTML = image.hits.reduce((html, hit) => {
        html += `
            <div class="card">
                <img width="300" alt="${hit.tags}" src="${hit.webformatURL}">
                <div class="card-elems">
                    <div class="card-text-el">
                        <h2 class="card-title">Likes</h2>
                        <p class="card-text">${hit.likes}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Views</h2>
                        <p class="card-text">${hit.views}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Comments</h2>
                        <p class="card-text">${hit.comments}</p>
                    </div>
                    <div class="card-text-el">
                        <h2 class="card-title">Downloads</h2>
                        <p class="card-text">${hit.downloads}</p>
                    </div>
                </div>
            </div>
        `;
        return html;
    }, '');

    return imagesHTML;
}

//webformatURL — посилання на маленьке зображення для списку карток у галереї
//largeImageURL — посилання на велике зображення для модального вікна
//tags — рядок з описом зображення. Підійде для атрибута alt
//likes — кількість вподобайок
//views — кількість переглядів
//comments — кількість коментарів
//downloads — кількість завантажень 