import uniqid from "uniqid";

class UserApi {
  constructor(storage) {
    this.init();
    this.storage = storage;
  }

  init() {
    this.user = this.getUserFromStorage();
    if (!this.user) {
      this.user = this.createUser();
      this.saveUserToStorage();
    }
  }

  getUserFromStorage() {
    return this.storage.getItem("user");
  }

  saveUserToStorage() {
    this.storage.setItem("user", this.user);
  }

  createUser() {
    return {
      id: uniqid()
    };
  }

  getUser() {
    return this.user;
  }
}

export default new UserApi(localStorage);
