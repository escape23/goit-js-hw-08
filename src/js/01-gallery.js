import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');

const createMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<li class="gallery__item">
          <div class="gallery__link" href="${original}" data-source="${original}">
              <img src="${preview}" alt="${description}" class='gallery__image'/>
          </div>
      </li>`
  )
  .join('');

list.innerHTML = createMarkup;

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'top',
  captionDelay: 250,
  sourceAttr: 'data-source',
});
