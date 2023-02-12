import './index.css';
import {apiBaseUrl, apiToken, buttonOpenModalImageAdd, buttonOpenModalProfileEdit, formValidationConfig, modalGallerySelector, modalGalleryImageFormSelector, modalProfileSelector, modalProfileFormSelector, modalZoomInSelector, preloaderContainer, profileAboutSelector, profileAvatarSelector, profileNameSelector, galleryContainer, modalFormConfirm, buttonOpenModalProfileEditAvatar, modalProfileAvatarSelector, modalProfileAvatarFormSelector,} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm";

const api = new Api({
  baseUrl: apiBaseUrl, headers: {
    authorization: apiToken, 'Content-Type': 'application/json'
  }
})


/**
 * Валидация форм
 */
const formValidatorProfile = new FormValidator(formValidationConfig, modalProfileFormSelector);
const formValidatorGallery = new FormValidator(formValidationConfig, modalGalleryImageFormSelector);
const formValidatorProfileAvatar = new FormValidator(formValidationConfig, modalProfileAvatarFormSelector);

/**
 * Название и описание сайта
 */
const userInfo = new UserInfo({nameSelector: profileNameSelector, aboutSelector: profileAboutSelector, avatarSelector: profileAvatarSelector});


/**
 * Добавление карточки
 * на страницу
 */
const cardsList = new Section({
  renderer: (cardElement) => {
    const card = createCard(cardElement._id, cardElement.name, cardElement.link, cardElement.likes, cardElement.owner._id, userInfo.getUserInfo().id);
    cardsList.addItem(card);
  },
}, galleryContainer);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([{name, about, avatar, _id}, cards]) => {
    userInfo.setUserInfo(name, about, _id);
    userInfo.setUserAvatar(avatar);
    cardsList.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err))
  .finally(() => preloaderContainer.classList.add('preloader_hidden'));


/**
 * Модальное окно с карточкой
 */
const popupWitchImage = new PopupWithImage(modalZoomInSelector);
popupWitchImage.setEventListeners();


/**
 * Модальное окно
 * подтверждения удаления карточки
 */
const popupWithConfirm = new PopupWithConfirm(modalFormConfirm);
popupWithConfirm.setEventListeners();


/**
 * Создание карточки
 */
function createCard(id, name, src, likes, ownerId, userId) {
  return new Card({
    _id: id, name: name, link: src, likes: likes, ownerId: ownerId, userId: userId,
  }, {
    handleCardClick: () => popupWitchImage.open(name, src), handleCardClickLike: (card) => {
      if (card.isLikeActive()) {
        api.delLike(card._id)
          .then((res) => {
            card.setLikesNumber(res.likes.length || '');
            card.toggleButtonLike();
          }).catch((err) => console.log(err))
      } else {
        api.setLike(card._id)
          .then((res) => {
            card.setLikesNumber(res.likes.length || '');
            card.toggleButtonLike();
          })
          .catch((err) => console.log(err))
      }
    }, handleCardClickTrash: (card) => {
      popupWithConfirm.setHandleSubmitForm(() => {
        api.delCard(card._id)
          .then(() => card.clickImageTrash())
          .catch((err) => console.log(err))
      });
      popupWithConfirm.open();
    },
  }, '#gallery-template',).generateCard();
}


/**
 * Модальное окно
 * Форма для редактирования
 * названия и описания профиля
 */
const popupWithFormProfile = new PopupWithForm({
  handleSubmitForm: (inputsValue) => {
    const textBefore = popupWithFormProfile._buttonElement.textContent;
    popupWithFormProfile._buttonElement.textContent = "Сохранение...";
    api.setUserInfo(inputsValue["user-name"], inputsValue["user-about"])
      .then(() => userInfo.setUserInfo(inputsValue["user-name"], inputsValue["user-about"]))
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithFormProfile.close();
        popupWithFormProfile._buttonElement.textContent = textBefore;
      });
  },
}, modalProfileSelector);
popupWithFormProfile.setEventListeners();


const handleButtonClickProfileEdit = () => {
  const {name, about} = userInfo.getUserInfo();
  formValidatorProfile.formValidationReset();
  popupWithFormProfile.setInputValues({"user-name": name, "user-about": about})
  popupWithFormProfile.open();
}
buttonOpenModalProfileEdit.addEventListener('click', handleButtonClickProfileEdit);


/**
 * Модальное окно
 * Форма добавления
 * карточки на страницу
 */
const popupWithFormCardAdd = new PopupWithForm({
  handleSubmitForm: (inputsValue) => {
    const textBefore = popupWithFormCardAdd._buttonElement.textContent;
    popupWithFormCardAdd._buttonElement.textContent = "Сохранение...";
    api.setCard(inputsValue["card-name"], inputsValue["card-img"])
      .then((res) => {
        const card = createCard(res._id, res.name, res.link, res.likes, res.owner._id, res.owner._id);
        cardsList.addItem(card);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithFormCardAdd.close();
        popupWithFormCardAdd._buttonElement.textContent = textBefore;
      });
  },
}, modalGallerySelector);
popupWithFormCardAdd.setEventListeners();

buttonOpenModalImageAdd.addEventListener('click', () => {
  formValidatorGallery.formValidationReset()
  popupWithFormCardAdd.open()
});


/**
 * Модальное окно
 * Форма для обновления
 * аватара пользователя
 */
const popupWithFormProfileAvatar = new PopupWithForm({
  handleSubmitForm: (inputsValue) => {
    const textBefore = popupWithFormProfileAvatar._buttonElement.textContent;
    popupWithFormProfileAvatar._buttonElement.textContent = "Сохранение...";
    api.setAvatar(inputsValue['avatar-link'])
      .then(() => userInfo.setUserAvatar(inputsValue['avatar-link']))
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithFormProfileAvatar.close();
        popupWithFormProfileAvatar._buttonElement.textContent = textBefore;
      });

  },
}, modalProfileAvatarSelector);
popupWithFormProfileAvatar.setEventListeners();

buttonOpenModalProfileEditAvatar.addEventListener('click', () => {
  formValidatorProfileAvatar.formValidationReset()
  popupWithFormProfileAvatar.open()

});


/**
 * Включение валидации форм
 */
formValidatorProfile.enableValidation()
formValidatorGallery.enableValidation()
formValidatorProfileAvatar.enableValidation()

