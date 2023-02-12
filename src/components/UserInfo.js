class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
    this._nameContainer = document.querySelector(nameSelector);
    this._aboutContainer = document.querySelector(aboutSelector);
    this._avatarContainer = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {name: this._nameContainer.textContent, about: this._aboutContainer.textContent, id: this._id}
  }

  setUserInfo(name, about, id) {
    this._nameContainer.textContent = name;
    this._aboutContainer.textContent = about;
    this._id = id;
  }

  setUserAvatar(imageSrc) {
    this._avatarContainer.src = imageSrc
  }
}

export default UserInfo