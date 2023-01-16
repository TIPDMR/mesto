class Card {
  constructor({name, link, handleCardClick}, templateSelector) {
    this._name = name;
    this._src = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.photo-gallery__element')
      .cloneNode(true);
  }

  _clickImageTrash() {
    this._element.remove();
    this._element = null;
  };

  _clickImageLike() {
    this._buttonLike.classList.toggle('photo-gallery__button_active');
  };


  _setEventListeners() {
    this._element.querySelector('.photo-gallery__button_action_trash').addEventListener('click', () => this._clickImageTrash());
    this._buttonLike.addEventListener('click', () => this._clickImageLike());
    this._elementImage.addEventListener('click', () => this._handleCardClick());
  }



  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.photo-gallery__title').textContent = this._name;
    this._elementImage = this._element.querySelector('.photo-gallery__image');
    this._elementImage.src = this._src;
    this._elementImage.alt = this._name;
    this._buttonLike = this._element.querySelector('.photo-gallery__button_action_like');
    this._setEventListeners();
    return this._element;
  }
}

export default Card