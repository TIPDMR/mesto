import Popup from "./Popup.js";

class PopupWithForm extends Popup {

  constructor({handleSubmitForm}, popupContainer) {
    super(popupContainer);
    this._handleSubmitForm = handleSubmitForm;
    this._formContainer = this._popupContainer.querySelector('.modal__form');
    this._inputsList = this._formContainer.querySelectorAll('.modal__input');
  }

  _getInputValues() {
    const inputValue = {};
    this._inputsList.forEach((input) => inputValue[input.name] = input.value);
    return inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formContainer.addEventListener('submit', (evn) => {
      evn.preventDefault();
      this._inputValues = this._getInputValues();
      this._handleSubmitForm(this._inputValues);
      this.close();
    });
  }

  close() {
    super.close();
    this._formContainer.reset();
  }
}

export default PopupWithForm