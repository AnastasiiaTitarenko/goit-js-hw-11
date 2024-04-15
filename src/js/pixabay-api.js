`use strict`;
// Library
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = "43303597-4cf3538acd20e5586f11f779c";

const btnSubmit = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("[search-form-input]");

btnSubmit.disabled = true;

searchForm.addEventListener("submit", handleSubmit);



function makeRequest(searchText) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchText,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    fetch(`${BASE_URL}?${params}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
            } else {
                displayImages(data.hits);
                
            }
        })
        .catch((error) => {
            console.error("Error fetching images:", error);
        });
};

function handleSubmit(event) {
    event.preventDefault();
    const searchText = searchInput.value.trim();
    if (searchText === "") {
        iziToast.error({
            title: "Error",
            message: "Search field cannot be empty",
            position: "topRight",
        });
    } else {
        makeRequest(searchText);
         btnSubmit.disabled = false;
       
    }
}
     
const gallery = document.querySelector(".gallery");
gallery.innerHTML = "";
// const galleryListHtml = images 
//         .map((image) => `
//     <li class="gallery-item">
// 	<a class="gallery-link" href="${image.original}">
// 		<img 
// 			class="gallery-image" 
// 			src="${image.preview}" 
// 			alt="${image.description}" 
// 			/>
// 	</a>
// </li>`).join("");

// galleryList.innerHTML = galleryListHtml;
    const lightbox = new simpleLightbox(`.gallery a`, {
        captionType: `attr`,
        captionsData: `alt`,
        captionDelay: 250,
    });

  
export { makeRequest };
