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

btnSubmit.addEventListener("submit", handleSubmit);

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

function makeRequest(searchText) {
   const params = new URLSearchParams({
    key: API_KEY,
    q: Image,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
}); 
}

fetch(`${BASE_URL} ? ${params}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    });

  
  
export { makeRequest };
