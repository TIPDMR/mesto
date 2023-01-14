class FormValidator {

  constructor({inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}, formElement) {
    this._inputSelector = inputSelector
    this._submitButtonSelector = submitButtonSelector
    this._inactiveButtonClass = inactiveButtonClass
    this._inputErrorClass = inputErrorClass
    this._errorClass = errorClass
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

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid)
  }

  _changeButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", "");
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._inactiveButtonClass);

    }
  };

  _setEventListeners(inputElement) {
    inputElement.addEventListener('input', () => {
      this._changeButtonState();
      this._checkInputValidity(inputElement);
    });
  }

  enableValidation() {
    this._inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
    this._inputList.forEach((inputElement) => {
      this._setEventListeners(inputElement)
    });
    this._changeButtonState();
  };

  formValidationReset() {
    this._changeButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }
}

export default FormValidator