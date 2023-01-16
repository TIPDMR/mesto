import Popup from "./Popup.js";

class PopupWithForm extends Popup {

  constructor({handleSubmitForm}, selector) {
    super(selector);
    this._handleSubmitForm = handleSubmitForm;
    this._formSelector = this._selector.querySelector('.modal__form');
    this._inputsList = this._formSelector.querySelectorAll('.modal__input')
  }

  _getInputValues() {
    const inputValue = {};
    this._inputsList.forEach((input) => inputValue[input.name] = input.value);
    return inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', (evn) => {
      evn.preventDefault();
      this._inputValues = this._getInputValues();
      this._handleSubmitForm(this._inputValues);
      this.close();
    });
  }

  close() {
    super.close();
    this._formSelector.reset();
  }
}

export default PopupWithForm