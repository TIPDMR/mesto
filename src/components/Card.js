class Card {
  constructor({_id: _id, name, link, likes, ownerId, userId}, {handleCardClick, handleCardClickLike, handleCardClickTrash}, templateSelector) {
    this._id = _id;
    this._name = name;
    this._src = link;
    this._likes = likes;
    this._ownerId = ownerId;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardClickLike = handleCardClickLike;
    this._handleCardClickTrash = handleCardClickTrash;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.photo-gallery__element')
      .cloneNode(true);
  }

  _checkOwnerLikes() {
    return (this._likes.length > 0) ? this._likes.some((like) => this._isOwner(like._id, this._userId)) : false;
  }

  _setEventListeners() {
    if (this._buttonTrash) {
      this._buttonTrash.addEventListener('click', () => this._handleCardClickTrash(this));
    }
    this._buttonLike.addEventListener('click', () => this._handleCardClickLike(this));
    this._elementImage.addEventListener('click', () => this._handleCardClick());
  }

  _isOwner(ownerId, userId) {
    return ownerId === userId;
  }

  _delButtonTrash() {
    this._buttonTrash.remove();
    this._buttonTrash = null;
  }

  setLikesNumber(number) {
    this._likesNumber.textContent = number;
  }

  clickImageTrash() {
    this._element.remove();
    this._element = null;
  };

  toggleButtonLike() {
    this._buttonLike.classList.toggle('photo-gallery__button_active');
  }

  isLikeActive() {
    return this._buttonLike.classList.contains('photo-gallery__button_active');
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.photo-gallery__title').textContent = this._name;
    this._elementImage = this._element.querySelector('.photo-gallery__image');
    this._elementImage.src = this._src;
    this._elementImage.alt = this._name;
    this._likeContainer = this._element.querySelector('.photo-gallery__like-container');
    this._buttonLike = this._likeContainer.querySelector('.photo-gallery__button_action_like');
    this._likesNumber = this._likeContainer.querySelector('.photo-gallery__likes-number');
    this._buttonTrash = this._element.querySelector('.photo-gallery__button_action_trash');
    this.setLikesNumber(this._likes.length || '');
    (!this._isOwner(this._ownerId, this._userId)) ? this._delButtonTrash() : null;
    (this._checkOwnerLikes()) ? this.toggleButtonLike() : null;
    this._setEventListeners();
    return this._element;
  }
}

export default Card
