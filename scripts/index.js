document.addEventListener("DOMContentLoaded", function () {

  let buttonAddModal = document.querySelector('.profile__button_action_edit');
  let username = document.querySelector('.profile__title');
  let description = document.querySelector('.profile__description');

  let modalBlock = document.querySelector('.modal');
  let buttonClose = modalBlock.querySelector('.modal__button_close');
  let inputUsername = modalBlock.querySelector('#username');
  let inputDescription = modalBlock.querySelector('#description');
  let buttonSave = modalBlock.querySelector('.modal__button_save');

  let loadUsernameDescription = function (evn) {
    inputUsername.value = username.textContent;
    inputDescription.value = description.textContent
  }
  let changeUsernameDescription = function (evn) {
    username.textContent = inputUsername.value;
    description.textContent = inputDescription.value;
    closeModal();
  }

  let openModal = function (evn) {
    loadUsernameDescription();
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

  buttonAddModal.addEventListener('click', openModal);
  buttonClose.addEventListener('click', closeModal);
  modalBlock.addEventListener('click', closeModalClickOnBackgroud);
  buttonSave.addEventListener('click', changeUsernameDescription);

})
