// document.addEventListener("DOMContentLoaded", function (env) {
const initialCards = [
  {name: 'Саяно-Шушенская ГЭС', link: './images/photo-gallery/sayano-shushenskaya-hpp.jpg'},
  {name: 'Гладенькая Горнолыжный Курорт', link: './images/photo-gallery/gladenkay.jpg'},
  {name: 'Сундуки', link: './images/photo-gallery/sunduki.jpg'},
  {name: 'Ергаки', link: './images/photo-gallery/Ergaki.jpg'},
  {name: 'Ширинские Озёра', link: './images/photo-gallery/shirinskie-ozera.jpg'},
  {name: 'Туимский провал', link: './images/photo-gallery/tuimskiy-proval.jpg'}
];

let buttonOpenModalProfileEdit = document.querySelector('.profile__button_action_edit');
let buttonOpenModalImageAdd = document.querySelector('.profile__button_action_add');

/**
 * Открытие модального окна
 * @param modalClass
 * @param myCallBackFunction
 */
let createModal = (modalClass, myCallBackFunction = false) => {

  let modalBlock = document.querySelector(modalClass);
  let modalButtonClose = modalBlock.querySelector('.modal__button_action_close');

  const openModal = function (evn) {
    modalBlock.classList.add('modal_visible');
  }

  const closeModal = function (evn) {
    modalBlock.classList.remove('modal_visible');
  }

  let closeModalClickOnBackground = function (evn) {
    if (evn.target !== evn.currentTarget) {
      return;
    }
    closeModal();
  }
  let actionSubmit = function (evn) {
    evn.preventDefault();
    closeModal();
  }

  if (typeof (myCallBackFunction) === 'function' && modalClass) {
    myCallBackFunction(modalClass);
  }

  modalBlock.addEventListener('submit', actionSubmit, {once: true});
  modalButtonClose.addEventListener('click', closeModal);
  modalBlock.addEventListener('click', closeModalClickOnBackground);
  openModal();
};

/**
 * Работа с данными пользователя
 * @param modalClass
 */
let eventClickProfileEdit = (modalClass) => {
  let profileTitle = document.querySelector('.profile__title');
  let profileDescription = document.querySelector('.profile__description');

  let modalFormBlock = document.querySelector(modalClass);
  let inputModalTitle = modalFormBlock.querySelector('.modal__input_type_title');
  let inputModalDescription = modalFormBlock.querySelector('.modal__input_type_description');

  let loadProfile = function () {
    inputModalTitle.value = profileTitle.textContent;
    inputModalDescription.value = profileDescription.textContent
  }
  loadProfile();

  let saveProfile = (e) => {
    e.preventDefault();
    profileTitle.textContent = inputModalTitle.value;
    profileDescription.textContent = inputModalDescription.value;
  }
  modalFormBlock.addEventListener('submit', saveProfile, {once: true});
}

/**
 * Добавление изображения в галерею
 * @param name
 * @param src
 */
let addImageToGallery = (name, src) => {
  const imageTemplate = document.querySelector('#gallery-template').content;
  const imagesTemplate = document.querySelector('.photo-gallery__items');
  const imageElement = imageTemplate.querySelector('li').cloneNode(true);
  let buttonTrash = imageElement.querySelector('.photo-gallery__button_action_trash');
  let buttonLike = imageElement.querySelector('.photo-gallery__button_action_like');
  imageElement.querySelector('.photo-gallery__title').textContent = name;
  let image = imageElement.querySelector('.photo-gallery__image');
  image.src = src;
  image.alt = name;

  let clickImageTrash = (e) => {
    e.preventDefault();
    e.target.closest('li').remove();
  };
  buttonTrash.addEventListener('click', clickImageTrash);

  let clickImageLike = (e) => {
    e.preventDefault();
    e.target.classList.add('photo-gallery__button_active');
  };
  buttonLike.addEventListener('click', clickImageLike);

  let clickImageZoom = (e) => {
    let miz = document.querySelector('.modal__image_zoom');
    let mi = miz.querySelector('.modal__img');
    let mif = miz.querySelector('.modal__figcaption');
    mif.textContent = name;
    mi.src = src;
    mi.alt = name;
    createModal('.modal__image_zoom')
  };
  image.addEventListener('click', clickImageZoom);

  imagesTemplate.prepend(imageElement);
}


/**
 * Обработчик формы добавления изображений в галерею
 * @param modalClass
 */
let eventClickImageAdd = (modalClass) => {
  const modalFormBlock = document.querySelector(modalClass);

  let eventFormAddImage = (e) => {
    e.preventDefault();
    let inputImageName = modalFormBlock.querySelector('.modal__input_type_img-name');
    let inputImageSrc = modalFormBlock.querySelector('.modal__input_type_img-src');
    addImageToGallery(inputImageName.value, inputImageSrc.value);
  };

  modalFormBlock.addEventListener('submit', eventFormAddImage, {once: true});
}

/**
 * Добавляем новые изображения
 * из массива в галерею
 */
initialCards.forEach((item) => {
  addImageToGallery(item.name, item.link)
})

/**
 * Слушатели событий при нажатии на кнопку
 */
buttonOpenModalProfileEdit.addEventListener('click', () => {
  createModal(".modal__form_profile_edit", eventClickProfileEdit);
});
buttonOpenModalImageAdd.addEventListener('click', () => {
  createModal(".modal__form_image_add", eventClickImageAdd);
});