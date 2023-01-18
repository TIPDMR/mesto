class UserInfo {
  constructor({titleContainer, descriptionContainer}) {
    this._titleContainer = titleContainer;
    this._descriptionContainer = descriptionContainer;
  }

  getUserInfo() {
    return {title: this._titleContainer.textContent, description: this._descriptionContainer.textContent}
  }

  setUserInfo(title, description) {
    this._titleContainer.textContent = title;
    this._descriptionContainer.textContent = description;
  }
}

export default UserInfo