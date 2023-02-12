import Popup from "./Popup.js";

class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._formContainer = this._popupContainer.querySelector('.modal__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._formContainer.addEventListener('submit', (evn) => {
      evn.preventDefault();
      this._handleSubmitForm();
      this.close();
    });
  }

  setHandleSubmitForm(handleSubmitForm) {
    this._handleSubmitForm = handleSubmitForm;
  }
}

export default PopupWithConfirm