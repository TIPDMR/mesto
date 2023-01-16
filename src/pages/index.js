import './index.css';
import {
  buttonOpenModalImageAdd,
  buttonOpenModalProfileEdit,
  cardData,
  formValidationConfig,
  modalGallery,
  modalGalleryImageForm,
  modalProfile,
  modalProfileForm,
  modalProfileInputDescription,
  modalProfileInputTitle,
  modalZoomIn,
  profileDescription,
  profileTitle,
  selectorGallery,
} from '../utils/constants.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import FormValidator from '../components/FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from "../components/UserInfo.js";


/**
 * Валидация форм
 */
const formValidatorProfile = new FormValidator(formValidationConfig, modalProfileForm)
const formValidatorGallery = new FormValidator(formValidationConfig, modalGalleryImageForm)

/**
 * Название и описание сайта
 */
const userInfo = new UserInfo({selectorTitle: profileTitle, selectorDescription: profileDescription})

/**
 * Модальное окно с карточкой
 */
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

