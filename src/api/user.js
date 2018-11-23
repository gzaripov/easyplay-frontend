import uniqid from "uniqid";

export const PREFERENCE = {
  fields: 0
};

class UserApi {
  constructor(storage) {
    this.storage = storage;
    this.init();
  }

  init() {
    this.user = this.getUserFromStorage();
    if (!this.user) {
      this.user = this.createUser();
      this.saveUserToStorage();
    }
  }

  getUserFromStorage() {
    try {
      const user = this.storage.getItem("user");
      return JSON.parse(user);
    } catch {
      return null;
    }
  }

  saveUserToStorage() {
    this.storage.setItem("user", JSON.stringify(this.user));
  }

  createUser() {
    return {
      id: uniqid(),
      preferences: []
    };
  }

  addPreference(type, preference) {
    this.user.preferences.push({ type, preference });
  }

  getPreference(type) {
    return this.user.preferences.find(pref => pref.type === type);
  }

  getUser() {
    return this.user;
  }
}

export default new UserApi(localStorage);
