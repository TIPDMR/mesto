class FormValidator {

    constructor({inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}, popupSelector) {
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inactiveButtonClass = inactiveButtonClass;
        this._inputErrorClass = inputErrorClass;
        this._errorClass = errorClass;
        this._formContainer = document.querySelector(popupSelector);
    }

    _showInputError(inputElement) {
        const errorElement = this._formContainer.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
    };

    _hideInputError(inputElement) {
        const errorElement = this._formContainer.querySelector(`.${inputElement.id}-error`);
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

    _setButtonDisable() {
        this._buttonElement.setAttribute("disabled", "");
        this._buttonElement.classList.add(this._inactiveButtonClass);
    }

    _setButtonEnable() {
        this._buttonElement.removeAttribute("disabled");
        this._buttonElement.classList.remove(this._inactiveButtonClass);
    }

    _changeButtonState() {
        if (this._hasInvalidInput()) {
            this._setButtonDisable();
        } else {
            this._setButtonEnable();
        }
    };

    _clearSpace(str) {
        return str.replace(/\s{2,}/g, ' ').trimStart();
    }

    _setEventListeners(inputElement) {
        inputElement.addEventListener('input', () => {
            inputElement.value = this._clearSpace(inputElement.value);
            this._changeButtonState();
            this._checkInputValidity(inputElement);
        });
    }

    enableValidation() {
        this._inputList = [...this._formContainer.querySelectorAll(this._inputSelector)];
        this._buttonElement = this._formContainer.querySelector(this._submitButtonSelector)
        this._inputList.forEach((inputElement) => {
            this._setEventListeners(inputElement)
        });
    };

    formValidationReset() {
        this._setButtonDisable();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }
}

export default FormValidator