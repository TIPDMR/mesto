class UserInfo {
  constructor({selectorTitle, selectorDescription}) {
    this._selectorTitle = selectorTitle;
    this._selectorDescription = selectorDescription;
  }

  getUserInfo() {
    return {title: this._selectorTitle.textContent, description: this._selectorDescription.textContent}
  }

  setUserInfo(title, description) {
    this._selectorTitle.textContent = title;
    this._selectorDescription.textContent = description;
  }
}

export default UserInfo