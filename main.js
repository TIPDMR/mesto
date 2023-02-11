(()=>{"use strict";var t={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},e=document.querySelector(".profile__button_action_edit"),n=document.querySelector(".profile__button_action_add"),r=document.querySelector(".profile__button_action_edit-avatar"),o=document.querySelector(".photo-gallery__items"),i=document.querySelector(".preloader");function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}const l=function(){function t(e,n,r){var o=e._id,i=e.name,a=e.link,u=e.likes,l=e.ownerId,c=e.userId,s=n.handleCardClick,f=n.handleCardClickLike,y=n.handleCardClickTrash;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=o,this._name=i,this._src=a,this._likes=u,this._ownerId=l,this._userId=c,this._templateSelector=r,this._handleCardClick=s,this._handleCardClickLike=f,this._handleCardClickTrash=y}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-gallery__element").cloneNode(!0)}},{key:"_checkOwnerLikes",value:function(){var t=this;return this._likes.length>0&&this._likes.some((function(e){return t._isOwner(e._id,t._userId)}))}},{key:"_setEventListeners",value:function(){var t=this;this._buttonTrash&&this._buttonTrash.addEventListener("click",(function(){return t._handleCardClickTrash(t)})),this._buttonLike.addEventListener("click",(function(){return t._handleCardClickLike(t)})),this._elementImage.addEventListener("click",(function(){return t._handleCardClick()}))}},{key:"_isOwner",value:function(t,e){return t===e}},{key:"_delButtonTrash",value:function(){this._buttonTrash.remove(),this._buttonTrash=null}},{key:"setLikesNumber",value:function(t){this._likesNumber.textContent=t}},{key:"clickImageTrash",value:function(){this._element.remove(),this._element=null}},{key:"toggleButtonLike",value:function(){this._buttonLike.classList.toggle("photo-gallery__button_active")}},{key:"isLikeActive",value:function(){return this._buttonLike.classList.contains("photo-gallery__button_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".photo-gallery__title").textContent=this._name,this._elementImage=this._element.querySelector(".photo-gallery__image"),this._elementImage.src=this._src,this._elementImage.alt=this._name,this._likeContainer=this._element.querySelector(".photo-gallery__like-container"),this._buttonLike=this._likeContainer.querySelector(".photo-gallery__button_action_like"),this._likesNumber=this._likeContainer.querySelector(".photo-gallery__likes-number"),this._buttonTrash=this._element.querySelector(".photo-gallery__button_action_trash"),this.setLikesNumber(this._likes.length||""),!this._isOwner(this._ownerId,this._userId)&&this._delButtonTrash(),this._checkOwnerLikes()&&this.toggleButtonLike(),this._setEventListeners(),this._element}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}const f=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}const m=function(){function t(e,n){var r=e.inputSelector,o=e.submitButtonSelector,i=e.inactiveButtonClass,a=e.inputErrorClass,u=e.errorClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=r,this._submitButtonSelector=o,this._inactiveButtonClass=i,this._inputErrorClass=a,this._errorClass=u,this._formContainer=document.querySelector(n)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){var e=this._formContainer.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._formContainer.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setButtonDisable",value:function(){this._buttonElement.setAttribute("disabled",""),this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_setButtonEnable",value:function(){this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_changeButtonState",value:function(){this._hasInvalidInput()?this._setButtonDisable():this._setButtonEnable()}},{key:"_clearSpace",value:function(t){return t.trim().replace(/\s{2,}/g," ")}},{key:"_setEventListeners",value:function(t){var e=this;t.addEventListener("input",(function(){t.value=e._clearSpace(t.value),e._changeButtonState(),e._checkInputValidity(t)}))}},{key:"enableValidation",value:function(){var t,e=this;this._inputList=function(t){if(Array.isArray(t))return p(t)}(t=this._formContainer.querySelectorAll(this._inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._buttonElement=this._formContainer.querySelector(this._submitButtonSelector),this._inputList.forEach((function(t){e._setEventListeners(t)}))}},{key:"formValidationReset",value:function(){var t=this;this._setButtonDisable(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}const v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupContainer=document.querySelector(e),this._buttonClose=this._popupContainer.querySelector(".modal__button_action_close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_setKeydownEventListener",value:function(){document.addEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._buttonClose.addEventListener("click",(function(){return t.close()})),this._popupContainer.addEventListener("mousedown",(function(e){return e.target===e.currentTarget?t.close():null}))}},{key:"_unsetKeydownEventListener",value:function(){document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._setKeydownEventListener(),this._popupContainer.classList.add("modal_visible")}},{key:"close",value:function(){this._unsetKeydownEventListener(),this._popupContainer.classList.remove("modal_visible")}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}const C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popupContainer.querySelector(".modal__img"),e._figCaption=e._popupContainer.querySelector(".modal__figcaption"),e}return e=a,(n=[{key:"open",value:function(t,e){this._figCaption.textContent=t,this._image.src=e,this._image.alt=t,S(w(a.prototype),"open",this).call(this)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(v);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}const I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n,r=t.handleSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=r,n._formContainer=n._popupContainer.querySelector(".modal__form"),n._inputsList=n._formContainer.querySelectorAll(".modal__input"),n._buttonElement=n._formContainer.querySelector(".modal__button"),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputsList.forEach((function(e){return t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputsList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;j(P(a.prototype),"setEventListeners",this).call(this),this._formContainer.addEventListener("submit",(function(e){e.preventDefault();var n=t._buttonElement.textContent;t._buttonElement.textContent="Сохранение...",t._handleSubmitForm(t._getInputValues()).finally((function(){t._buttonElement.textContent=n,t.close()}))}))}},{key:"close",value:function(){j(P(a.prototype),"close",this).call(this),this._formContainer.reset()}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(v);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}const R=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameContainer=document.querySelector(n),this._aboutContainer=document.querySelector(r),this._avatarContainer=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameContainer.textContent,about:this._aboutContainer.textContent,id:this._id}}},{key:"setUserInfo",value:function(t,e,n){this._nameContainer.textContent=t,this._aboutContainer.textContent=e,this._id=n}},{key:"setUserAvatar",value:function(t){this._avatarContainer.src=t}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var U=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_checkResult",value:function(t){return t.ok?t.json():Promise.reject("Ошибка => ".concat(t.status))}},{key:"_request",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl).concat(t),e).then((function(t){return n._checkResult(t)}))}},{key:"getInitialCards",value:function(){return this._request("/cards",{headers:this._headers})}},{key:"getUserInfo",value:function(){return this._request("/users/me",{headers:this._headers,method:"GET"})}},{key:"setUserInfo",value:function(t,e){return this._request("/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:e})})}},{key:"setCard",value:function(t,e){return this._request("/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:e})})}},{key:"setLike",value:function(t){return this._request("/cards/".concat(t,"/likes"),{headers:this._headers,method:"PUT"})}},{key:"delLike",value:function(t){return this._request("/cards/".concat(t,"/likes"),{headers:this._headers,method:"DELETE"})}},{key:"delCard",value:function(t){return this._request("/cards/".concat(t),{headers:this._headers,method:"DELETE"})}},{key:"setAvatar",value:function(t){return this._request("/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t})})}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function F(t,e){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},F(t,e)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}const H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._formContainer=e._popupContainer.querySelector(".modal__form"),e}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;D(N(a.prototype),"setEventListeners",this).call(this),this._formContainer.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(),t.close()}))}},{key:"setHandleSubmitForm",value:function(t){this._handleSubmitForm=t}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(v);function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var J=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"bae80771-0801-41af-a64f-417707c2f376","Content-Type":"application/json"}}),M=new m(t,".modal__form-profile"),z=new m(t,".modal__form-card-add"),$=new m(t,".modal__form-avatar-edit"),G=new R({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__img"}),Q=new f({renderer:function(t){var e=Y(t._id,t.name,t.link,t.likes,t.owner._id,G.getUserInfo().id);Q.addItem(e)}},o);Promise.all([J.getUserInfo(),J.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=o.name,a=o.about,u=o.avatar,l=o._id,c=r[1];G.setUserInfo(i,a,l),G.setUserAvatar(u),Q.renderItems(c.reverse())})).catch((function(t){return console.log(t)})).finally((function(){return i.classList.add("preloader_hidden")}));var W=new C(".modal_zoom_in");W.setEventListeners();var X=new H(".modal_form_confirm");function Y(t,e,n,r,o,i){return new l({_id:t,name:e,link:n,likes:r,ownerId:o,userId:i},{handleCardClick:function(){return W.open(e,n)},handleCardClickLike:function(t){t.isLikeActive()?J.delLike(t._id).then((function(e){t.setLikesNumber(e.likes.length||""),t.toggleButtonLike()})).catch((function(t){return console.log(t)})):J.setLike(t._id).then((function(e){t.setLikesNumber(e.likes.length||""),t.toggleButtonLike()})).catch((function(t){return console.log(t)}))},handleCardClickTrash:function(t){X.setHandleSubmitForm((function(){J.delCard(t._id).then((function(){return t.clickImageTrash()})).catch((function(t){return console.log(t)}))})),X.open()}},"#gallery-template").generateCard()}X.setEventListeners();var Z=new I({handleSubmitForm:function(t){return J.setUserInfo(t["user-name"],t["user-about"]).then((function(){return G.setUserInfo(t["user-name"],t["user-about"])})).catch((function(t){return console.log(t)}))}},".modal_form_profile");Z.setEventListeners(),e.addEventListener("click",(function(){var t=G.getUserInfo(),e=t.name,n=t.about;M.formValidationReset(),Z.setInputValues({"user-name":e,"user-about":n}),Z.open()}));var tt=new I({handleSubmitForm:function(t){return J.setCard(t["card-name"],t["card-img"]).then((function(t){var e=Y(t._id,t.name,t.link,t.likes,t.owner._id,t.owner._id);Q.addItem(e)})).catch((function(t){return console.log(t)}))}},".modal_form_img-add");tt.setEventListeners(),n.addEventListener("click",(function(){z.formValidationReset(),tt.open()}));var et=new I({handleSubmitForm:function(t){return J.setAvatar(t["avatar-link"]).then((function(){return G.setUserAvatar(t["avatar-link"])})).catch((function(t){return console.log(t)}))}},".modal_form_avatar-edit");et.setEventListeners(),r.addEventListener("click",(function(){$.formValidationReset(),et.open()})),M.enableValidation(),z.enableValidation(),$.enableValidation()})();