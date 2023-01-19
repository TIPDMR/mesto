class Popup {
  constructor(popupContainer) {
    this._popupContainer = popupContainer;
    this._button = this._popupContainer.querySelector('.modal__button_action_close');
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  _handleEscClose(evn) {
    if (evn.key === "Escape") {
      this.close();
    }
  }

  _setKeydownEventListener() {
    document.addEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._button.addEventListener('click', () => this.close());
    this._popupContainer.addEventListener('mousedown', (evn) => (evn.target === evn.currentTarget) ? this.close() : null);
  }

  _unsetKeydownEventListener() {
    document.removeEventListener('keydown', this._handleEscClose);
  }

  open() {
    this._setKeydownEventListener();
    this._popupContainer.classList.add('modal_visible');
  }

  close() {
    this._unsetKeydownEventListener();
    this._popupContainer.classList.remove('modal_visible');
  }
}

export default Popup