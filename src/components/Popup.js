class Popup {
  constructor(selector) {
    this._selector = selector
    this._button = this._selector.querySelector('.modal__button_action_close')
  }

  _handleEscClose(evn) {
    if (evn.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._button.addEventListener('click', () => this.close());
    this._selector.addEventListener('mousedown', (evn) => (evn.target === evn.currentTarget) ? this.close() : null);
  }

  _unsetEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
  }

  open() {
    this._selector.classList.add('modal_visible');
  }

  close() {
    this._selector.classList.remove('modal_visible');
    this._unsetEventListeners();
  }
}

export default Popup