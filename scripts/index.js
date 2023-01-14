import {cardData} from './cardData.js'
import Card from './Card.js'
import {formValidationConfig} from './formValidatorConfig.js'
import FormValidator from './FormValidator.js'
import Section from './Section.js'
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";


const buttonOpenModalProfileEdit = document.querySelector('.profile__button_action_edit');
const buttonOpenModalImageAdd = document.querySelector('.profile__button_action_add');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const modalProfile = document.querySelector('.modal_form_profile');
const modalProfileForm = modalProfile.querySelector('.modal__form_profile');
const modalProfileInputTitle = modalProfileForm.querySelector('.modal__input_name_title');
const modalProfileInputDescription = modalProfileForm.querySelector('.modal__input_name_description');

const modalGallery = document.querySelector('.modal_form_img-add');
const modalGalleryImageForm = modalGallery.querySelector('.modal__form_image-add');
const selectorGallery = document.querySelector('.photo-gallery__items');
const modalZoomIn = document.querySelector('.modal_zoom_in');


/**
 * Валидация форм
 */
const formValidatorProfile = new FormValidator(formValidationConfig, modalProfileForm)
const formValidatorGallery = new FormValidator(formValidationConfig, modalGalleryImageForm)

/**
 * Название и описание сайта
 */
const userInfo = new UserInfo({selectorTitle: profileTitle, selectorDescription: profileDescription})

const popupWitchImage = new PopupWithImage(modalZoomIn);
popupWitchImage.setEventListeners();

/**
 * Создание карточки
 */
function createCard(name, src) {
  return new Card({
      name: name,
      link: src,
      handleCardClick: () => popupWitchImage.open(name, src),
    },
    '#gallery-template',).generateCard()
}

/**
 * Добавление карточки
 * на страницу
 */
const cardList = new Section({
    items: cardData,
    renderer: (cardElement) => {
      const card = createCard(cardElement.name, cardElement.link)
      cardList.addItem(card)
    },
  },
  selectorGallery
);
cardList.renderItems()


/**
 * Модальное окно
 * Форма для редактирования
 * названия и описания сайта
 */
const popupWithFormProfile = new PopupWithForm({
  handleSubmitForm: (inputsValue) => userInfo.setUserInfo(inputsValue["title"], inputsValue["description"]),
}, modalProfile);
popupWithFormProfile.setEventListeners();


const handleButtonClickProfileEdit = () => {
  const {title, description} = userInfo.getUserInfo();
  modalProfileInputTitle.value = title;
  modalProfileInputDescription.value = description;
  formValidatorProfile.formValidationReset();
  popupWithFormProfile.open();
}
buttonOpenModalProfileEdit.addEventListener('click', handleButtonClickProfileEdit);

/**
 * Модальное окно
 * Форма добавления
 * карточки на страницу
 */
const popupWithFormGallery = new PopupWithForm({
  handleSubmitForm: (inputsValue) => {
    const card = createCard(inputsValue["img-name"], inputsValue["img-src"]);
    cardList.addItem(card);
  },
}, modalGallery);
popupWithFormGallery.setEventListeners();

buttonOpenModalImageAdd.addEventListener('click', () => {
  formValidatorGallery.formValidationReset()
  popupWithFormGallery.open()
});


/**
 * Включение валидации форм
 */
formValidatorProfile.enableValidation()
formValidatorGallery.enableValidation()

