import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupContainer) {
    super(popupContainer);
    this._image = this._popupContainer.querySelector('.modal__img');
    this._figCaption = this._popupContainer.querySelector('.modal__figcaption');
  }


  open(name, src) {
    this._figCaption.textContent = name;
    this._image.src = src;
    this._image.alt = name;
    super.open()
  }
}


export default PopupWithImage