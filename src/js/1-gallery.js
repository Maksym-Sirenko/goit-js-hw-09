import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryElem = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery-item">
	<a class="gallery-link" href="${original}">
		<img 
		  class="gallery-image" 
		  src="${preview}" 
		  alt="${description}" 
		/>
	</a>
</li>`;
  })
  .join('');

galleryElem.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
