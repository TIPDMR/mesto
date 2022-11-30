const buttonOpenModalProfileEdit = document.querySelector('.profile__button_action_edit');
const buttonOpenModalImageAdd = document.querySelector('.profile__button_action_add');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const modals = document.querySelectorAll('.modal');
const modalProfile = document.querySelector('.modal_form_profile');
const modalProfileForm = modalProfile.querySelector('.modal__form_profile');
const modalProfileInputTitle = modalProfileForm.querySelector('.modal__input_type_title');
const modalProfileInputDescription = modalProfileForm.querySelector('.modal__input_type_description');

const modalGallery = document.querySelector('.modal_form_img-add');
const modalGalleryImageForm = modalGallery.querySelector('.modal__form_image-add');
const modalGalleryImageFormInputName = modalGalleryImageForm.querySelector('.modal__input_type_img-name');
const modalGalleryImageFormInputSrc = modalGalleryImageForm.querySelector('.modal__input_type_img-src');
const selectorGallery = document.querySelector('.photo-gallery__items');
const templateGalleryImage = document.querySelector('#gallery-template').content;

const modalImageZoom = document.querySelector('.modal_zoom_in');
const modalImageZoomImage = modalImageZoom.querySelector('.modal__img');
const modalImageZoomFigcaption = modalImageZoom.querySelector('.modal__figcaption');


const openModal = function (modalBlock) {
  modalBlock.classList.add('modal_visible');
}

const closeModal = function (modalBlock) {
  modalBlock.classList.remove('modal_visible');
}

modals.forEach((modalBlock) => {
  modalBlock.querySelector('.modal__button_action_close').addEventListener('click', () => {
    closeModal(modalBlock)
  });
  modalBlock.addEventListener('click', (evn) => {
    if (evn.target !== evn.currentTarget) {
      return;
    }
    closeModal(modalBlock);
  });
});

const clickImageTrash = (e) => {
  e.preventDefault();
  e.target.closest('li').remove();
};

const clickImageLike = (e) => {
  e.preventDefault();
  e.target.classList.toggle('photo-gallery__button_active');
};

const clickImageZoom = (name, src) => {
  modalImageZoomFigcaption.textContent = name;
  modalImageZoomImage.src = src;
  modalImageZoomImage.alt = name;
  openModal(modalImageZoom);
};

const createImage = (name, src) => {
  const imageElement = templateGalleryImage.querySelector('li').cloneNode(true);
  imageElement.querySelector('.photo-gallery__title').textContent = name;
  const image = imageElement.querySelector('.photo-gallery__image');
  image.src = src;
  image.alt = name;
  imageElement.querySelector('.photo-gallery__button_action_trash').addEventListener('click', clickImageTrash);
  imageElement.querySelector('.photo-gallery__button_action_like').addEventListener('click', clickImageLike);
  imageElement.querySelector('.photo-gallery__image').addEventListener('click', () => {
    clickImageZoom(name, src);
  });
  return imageElement;
}

initialCards.forEach((item) => selectorGallery.prepend(createImage(item.name, item.link)));

const eventSubmitProfileSave = (e) => {
  e.preventDefault();
  profileTitle.textContent = modalProfileInputTitle.value;
  profileDescription.textContent = modalProfileInputDescription.value;
  closeModal(modalProfile)
}

const eventClickProfileEdit = (e) => {
  modalProfileInputTitle.value = profileTitle.textContent;
  modalProfileInputDescription.value = profileDescription.textContent
  openModal(modalProfile)
}

const eventSubmitImageAdd = (e) => {
  e.preventDefault();
  selectorGallery.prepend(createImage(modalGalleryImageFormInputName.value, modalGalleryImageFormInputSrc.value));
  closeModal(modalGallery);
}

modalProfileForm.addEventListener('submit', eventSubmitProfileSave);
modalGalleryImageForm.addEventListener('submit', eventSubmitImageAdd);
buttonOpenModalProfileEdit.addEventListener('click', eventClickProfileEdit);
buttonOpenModalImageAdd.addEventListener('click', (e) => {
  modalGalleryImageForm.reset();
  openModal(modalGallery);
});