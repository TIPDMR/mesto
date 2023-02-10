import Popup from "./Popup.js";

class PopupWithForm extends Popup {

    constructor({handleSubmitForm}, popupSelector) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formContainer = this._popupContainer.querySelector('.modal__form');
        this._inputsList = this._formContainer.querySelectorAll('.modal__input');
        this._buttonElement = this._formContainer.querySelector('.modal__button')
    }

    _getInputValues() {
        const inputValue = {};
        this._inputsList.forEach((input) => inputValue[input.name] = input.value);
        return inputValue;
    }

    setInputValues(inputsValue) {
        this._inputsList.forEach((input) => {
            input.value = inputsValue[input.name]
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._formContainer.addEventListener('submit', (evn) => {
            evn.preventDefault();
            const textBefore = this._buttonElement.textContent;
            this._buttonElement.textContent = "Сохранение...";
            this._handleSubmitForm(this._getInputValues())
                .finally(() => {
                    this._buttonElement.textContent = textBefore;
                    this.close();
                });
        });
    }

    close() {
        super.close();
        this._formContainer.reset();
    }
}

export default PopupWithForm