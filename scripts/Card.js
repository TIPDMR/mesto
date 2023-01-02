import {openModal} from "./index.js";

export default class Card {
  constructor(config, templateSelector) {
    this._name = config.name;
    this._src = config.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.photo-gallery__element')
      .cloneNode(true);
  }

  _clickImageTrash = (e) => {
    e.preventDefault();
    e.target.closest('.photo-gallery__element').remove();
  };

  _clickImageLike = (e) => {
    e.preventDefault();
    e.target.classList.toggle('photo-gallery__button_active');
  };


  _setEventListeners() {
    this._element.querySelector('.photo-gallery__button_action_trash').addEventListener('click', this._clickImageTrash);
    this._element.querySelector('.photo-gallery__button_action_like').addEventListener('click', this._clickImageLike);
    this._elementImage.addEventListener('click', this._clickImageZoom);
  }

  _clickImageZoom = () => {
    this._modalImageZoom = document.querySelector('.modal_zoom_in');
    this._modalImageZoom.querySelector('.modal__figcaption').textContent = this._name;
    const modalImageZoomImage = this._modalImageZoom.querySelector('.modal__img');
    modalImageZoomImage.src = this._src;
    modalImageZoomImage.alt = this._name;
    openModal(this._modalImageZoom);
  };

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.photo-gallery__title').textContent = this._name;
    this._elementImage = this._element.querySelector('.photo-gallery__image');
    this._elementImage.src = this._src;
    this._elementImage.alt = this._name;
    this._setEventListeners();
    return this._element;
  }
}