export const cardData = [
  {name: 'Саяно-Шушенская ГЭС', link: new URL('../images/photo-gallery/sayano-shushenskaya-hpp.jpg', import.meta.url)},
  {name: 'Гладенькая Горнолыжный Курорт', link: new URL('../images/photo-gallery/gladenkay.jpg', import.meta.url)},
  {name: 'Сундуки', link: new URL('../images/photo-gallery/sunduki.jpg', import.meta.url)},
  {name: 'Ергаки', link: new URL('../images/photo-gallery/Ergaki.jpg', import.meta.url)},
  {name: 'Ширинские Озёра', link: new URL('../images/photo-gallery/shirinskie-ozera.jpg', import.meta.url)},
  {name: 'Туимский провал', link: new URL('../images/photo-gallery/tuimskiy-proval.jpg', import.meta.url)},
]

export const formValidationConfig = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__button',
  inactiveButtonClass: 'modal__button_disabled',
  inputErrorClass: 'modal__input_type_error',
  errorClass: 'modal__error_visible'
}

export const buttonOpenModalProfileEdit = document.querySelector('.profile__button_action_edit');
export const buttonOpenModalImageAdd = document.querySelector('.profile__button_action_add');

export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

export const modalProfile = document.querySelector('.modal_form_profile');
export const modalProfileForm = modalProfile.querySelector('.modal__form_profile');
export const modalProfileInputTitle = modalProfileForm.querySelector('.modal__input_name_title');
export const modalProfileInputDescription = modalProfileForm.querySelector('.modal__input_name_description');

export const modalGallery = document.querySelector('.modal_form_img-add');
export const modalGalleryImageForm = modalGallery.querySelector('.modal__form_image-add');
export const selectorGallery = document.querySelector('.photo-gallery__items');
export const modalZoomIn = document.querySelector('.modal_zoom_in');