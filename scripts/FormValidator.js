export default class FormValidator {

  constructor(config, formElement) {
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._formElement = formElement
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement)
    } else {
      this._hideInputError(inputElement)
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid)
  }

  _changeButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  _setEventListeners(inputElement, inputList, buttonElement) {
    inputElement.addEventListener('input', () => {
      this._changeButtonState(inputList, buttonElement);
      this._checkInputValidity(inputElement);
    });
  }

  enableValidation() {
    const inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector)
    this._changeButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      this._setEventListeners(inputElement, inputList, buttonElement)
    });
  };

  formValidationReset() {
    const inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
      this._changeButtonState(inputList, buttonElement);
    });
  }
}