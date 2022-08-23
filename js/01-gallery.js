console.log(galleryItems);
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imgList = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', imgList);
console.log(gallery);

gallery.addEventListener('click', handleClick);
  const instance = basicLightbox.create(`
    <img width="800" height="600">
`);

function handleClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const dataSource = event.target.dataset.source;

  instance.element().querySelector('img').src = dataSource;
  instance.show();

  gallery.addEventListener('keydown', closeEsc);

  function closeEsc(event) {
    event.preventDefault();
    if (event.key === 'Escape') {
      instance.close();
      gallery.removeEventListener('keydown', closeEsc);
    }
  }
}
