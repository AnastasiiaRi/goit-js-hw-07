import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const image = galleryItems
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
.join("");
gallery.insertAdjacentHTML("afterbegin", image);

gallery.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
          return;
      } 
  });

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });