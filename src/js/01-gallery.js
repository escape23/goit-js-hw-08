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

console.log(createMarkup);
list.innerHTML = createMarkup;

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'top',
  captionDelay: 250,
  sourceAttr: 'data-source',
});

console.log(lightbox);

// import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const items = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<li class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           alt="${description}"
//         />
//       </a>
//     </li>`;
//   })
//   .join('');

// const gallery = document.querySelector('.gallery');
// gallery.innerHTML = items;

// const lightbox = new SimpleLightbox('.gallery__link', {
//   captions: true,
//   captionsData: 'alt',
//   captionsDelay: 250,
// });

// console.log(lightbox);
