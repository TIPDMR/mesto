document.addEventListener("DOMContentLoaded", function (env) {

  let buttonOpenModal = document.querySelector('.profile__button_action_edit');
  let profileTitle = document.querySelector('.profile__title');
  let profileDescription = document.querySelector('.profile__description');

  let modalBlock = document.querySelector('.modal');
  let buttonCloseModal = modalBlock.querySelector('.modal__button_close');

  let modalFormBlock = document.querySelector('.modal__form');
  let inputModalTitle = modalFormBlock.querySelector('.modal__input_title');
  let inputModalDescription = modalFormBlock.querySelector('.modal__input_description');

  let firstLoad = true;

  let loadProfile = function (evn) {
    inputModalTitle.value = profileTitle.textContent;
    inputModalDescription.value = profileDescription.textContent
  }

  let saveProfile = function (evn) {
    evn.preventDefault();
    profileTitle.innerHTML = inputModalTitle.value;
    profileDescription.innerHTML = inputModalDescription.value;
    closeModal();
  }

  let openModal = function (evn) {
    if (firstLoad) {
      loadProfile();
      firstLoad = false;
    }
    document.body.style.overflow = 'hidden';
    modalBlock.classList.add('modal_visible');
  }

  let closeModal = function (evn) {
    document.body.style.overflow = 'visible';
    modalBlock.classList.remove('modal_visible');
  }

  let closeModalClickOnBackgroud = function (evn) {
    if (evn.target !== evn.currentTarget) {
      return;
    }
    closeModal();
  }

  buttonOpenModal.addEventListener('click', openModal);
  buttonCloseModal.addEventListener('click', closeModal);
  modalBlock.addEventListener('click', closeModalClickOnBackgroud);
  modalFormBlock.addEventListener('submit', saveProfile);

})
