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
export const buttonOpenModalProfileEditAvatar = document.querySelector('.profile__button_action_edit-avatar');


export const profileNameSelector = '.profile__name';
export const profileAboutSelector = '.profile__about';
export const profileAvatarSelector = '.profile__img';

export const modalProfileAvatarSelector = '.modal_form_avatar-edit';
export const modalProfileAvatarFormSelector = '.modal__form-avatar-edit';

export const modalFormConfirmSelector = '.modal_form_confirm';
export const modalProfileSelector = '.modal_form_profile';
export const modalProfileFormSelector = '.modal__form-profile';

export const modalGallerySelector = '.modal_form_img-add';
export const modalGalleryImageFormSelector = '.modal__form-card-add';
export const modalZoomInSelector = '.modal_zoom_in';

export const galleryContainer = document.querySelector('.photo-gallery__items');

export const preloaderContainer = document.querySelector('.preloader');

export const apiBaseUrl = "https://mesto.nomoreparties.co/v1/cohort-59";
export const apiToken = "bae80771-0801-41af-a64f-417707c2f376";