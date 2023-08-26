// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.style.listStyle = 'none';
const cardsMarkup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                  <a class="gallery__link" href="${original}">
                    <img
                      class="gallery__image"
                      src="${preview}"
                      alt="${description}"
                    />
                  </a>
              </li>`;
    })
    .join('');
}
