import img from './gallery-items.js';

const galleryElement = document.querySelector('.js-gallery');
const textLi = img.map(option => {
  const textItem =
        `<li class="gallery__item">
            <a class="gallery__link" href="${option.original}">
                <img class="gallery__image" src="${option.preview}"
                    data-source="${option.original}" alt="${option.description}" />
            </a>
        </li>`;
  return textItem;
});
const textItemFinal = textLi.join(' ');
galleryElement.insertAdjacentHTML('afterbegin', textItemFinal)

const modalWindow = document.querySelector('.js-lightbox');
const modalWindowImage = document.querySelector('.lightbox__image');
const closeButtonModalWindow = document.querySelector('[data-action="close-lightbox"]');

galleryElement.addEventListener('click', clickImg);

function clickImg(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
};
  event.preventDefault();
  closeButtonModalWindow.addEventListener('click', closeButton);
  modalWindow.classList.add('is-open');
  modalWindowImage.alt = event.target.alt;
  modalWindowImage.src = event.target.dataset.source;
};

function closeButton() {
  closeButtonModalWindow.removeEventListener('click', closeButton);
  modalWindow.classList.remove('is-open');
};