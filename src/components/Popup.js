class Popup {
  constructor(popupContainer) {
    this._popupContainer = popupContainer;
    this._button = this._popupContainer.querySelector('.modal__button_action_close');
  }

  _handleEscClose(evn) {
    if (evn.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._button.addEventListener('click', () => this.close());
    this._popupContainer.addEventListener('mousedown', (evn) => (evn.target === evn.currentTarget) ? this.close() : null);
  }

  _unsetEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
  }

  open() {
    this._popupContainer.classList.add('modal_visible');
  }

  close() {
    this._popupContainer.classList.remove('modal_visible');
    this._unsetEventListeners();
  }
}

export default Popup