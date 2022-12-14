import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imgList = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', imgList);
 let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
console.log(SimpleLightbox);

function handleClick(event) {
  event.preventDefault();
}
