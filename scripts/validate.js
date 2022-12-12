const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config.inputErrorClass, config.errorClass);
  } else {
    hideInputError(formElement, inputElement, config.inputErrorClass, config.errorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid)
}

const changeButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
};


const enableValidation = (config) => {
  const formsList = document.querySelectorAll(config.formSelector);
  formsList.forEach((formElement) => {
    const inputList = [...formElement.querySelectorAll(config.inputSelector)];
    const buttonElement = formElement.querySelector(config.submitButtonSelector)
    changeButtonState(inputList, buttonElement, config.inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        changeButtonState(inputList, buttonElement, config.inactiveButtonClass);
        checkInputValidity(config, formElement, inputElement);
      });
    });
  });
};

const formValidationReset = (modalElement) => {
  const formElement = modalElement.querySelector(configFormValidation.formSelector);
  const inputList = [...formElement.querySelectorAll(configFormValidation.inputSelector)];
  const buttonElement = formElement.querySelector(configFormValidation.submitButtonSelector);
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, configFormValidation.inputErrorClass, configFormValidation.errorClass)
    changeButtonState(inputList, buttonElement, configFormValidation.inactiveButtonClass);
  });
}

enableValidation(configFormValidation);