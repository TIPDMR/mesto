import {CardData} from './CardData.js'
import Card from './Card.js'
import {FormValidationConfig} from './FormValidatorConfig.js'
import FormValidator from './FormValidator.js'


const buttonOpenModalProfileEdit = document.querySelector('.profile__button_action_edit');
const buttonOpenModalImageAdd = document.querySelector('.profile__button_action_add');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const modalList = document.querySelectorAll('.modal');
const modalProfile = document.querySelector('.modal_form_profile');
const modalProfileForm = modalProfile.querySelector('.modal__form_profile');
const modalProfileInputTitle = modalProfileForm.querySelector('.modal__input_name_title');
const modalProfileInputDescription = modalProfileForm.querySelector('.modal__input_name_description');

const modalGallery = document.querySelector('.modal_form_img-add');
const modalGalleryImageForm = modalGallery.querySelector('.modal__form_image-add');
const modalGalleryImageFormInputName = modalGalleryImageForm.querySelector('.modal__input_name_img-name');
const modalGalleryImageFormInputSrc = modalGalleryImageForm.querySelector('.modal__input_name_img-src');
const selectorGallery = document.querySelector('.photo-gallery__items');

const handleClickEsc = (evn) => {
  if (evn.key === "Escape") {
    const modalOpen = document.querySelector('.modal_visible')
    closeModal(modalOpen);
  }
}

const openModal = function (modalBlock) {
  document.addEventListener('keydown', handleClickEsc);
  modalBlock.classList.add('modal_visible');
}

const closeModal = function (modalBlock) {
  modalBlock.classList.remove('modal_visible');
  document.removeEventListener('keydown', handleClickEsc);
}

modalList.forEach((modalBlock) => {
  modalBlock.querySelector('.modal__button_action_close').addEventListener('click', () => {
    closeModal(modalBlock)
  });
  modalBlock.addEventListener('mousedown', (evn) => {
    if (evn.target !== evn.currentTarget) {
      return;
    }
    closeModal(modalBlock);
  });
});

const createCard = function (name, src) {
  return new Card({name: name, link: src}, '#gallery-template').generateCard()
}

CardData.forEach((item) => {
  selectorGallery.prepend(createCard(item.name, item.link))
});

const formValidatorProfile = new FormValidator(FormValidationConfig, modalProfileForm)
formValidatorProfile.enableValidation()

const formValidatorGallery = new FormValidator(FormValidationConfig, modalGalleryImageForm)
formValidatorGallery.enableValidation()

const handleFormSubmitProfileUpdate = (e) => {
  e.preventDefault();
  profileTitle.textContent = modalProfileInputTitle.value;
  profileDescription.textContent = modalProfileInputDescription.value;
  closeModal(modalProfile)
}

const handleButtonClickProfileEdit = () => {
  modalProfileInputTitle.value = profileTitle.textContent;
  modalProfileInputDescription.value = profileDescription.textContent;
  formValidatorProfile.formValidationReset();
  openModal(modalProfile);
}

const handleFormSubmitCardCreate = (e) => {
  e.preventDefault();
  selectorGallery.prepend(createCard(modalGalleryImageFormInputName.value, modalGalleryImageFormInputSrc.value))
  closeModal(modalGallery);
}

modalProfileForm.addEventListener('submit', handleFormSubmitProfileUpdate);
modalGalleryImageForm.addEventListener('submit', handleFormSubmitCardCreate);
buttonOpenModalProfileEdit.addEventListener('click', handleButtonClickProfileEdit);
buttonOpenModalImageAdd.addEventListener('click', () => {
  modalGalleryImageForm.reset();
  formValidatorGallery.formValidationReset();
  openModal(modalGallery);
});

export {openModal}