// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery")

const galleryMarkup = onCreateGallaryMarkup(galleryItems)

galleryEl.insertAdjacentHTML('beforeend',galleryMarkup)

new SimpleLightbox('.gallery a');


function onCreateGallaryMarkup(images) {
    return images.map(({ preview, original, description }) => {
       return`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join("")       
}
