import uniqid from "uniqid";

export const PREFERENCE = {
  activities: 0
};

class UserApi {
  constructor(storage) {
    this.storage = storage;
    this.init();
  }

  init() {
    this.user = this.restoreUser();
    if (!this.user) {
      this.user = this.createUser();
      this.storeUser();
    }
  }

  restoreUser() {
    try {
      const user = this.storage.getItem("user");
      return JSON.parse(user);
    } catch {
      return null;
    }
  }

  storeUser() {
    this.storage.setItem("user", JSON.stringify(this.user));
  }

  createUser() {
    return {
      id: uniqid(),
      preferences: []
    };
  }

  hasPreference(type) {
    return !!this.getPreference(type);
  }

  getPreference(type) {
    const prefObject = this.user.preferences.find(pref => pref.type === type);
    return prefObject ? prefObject.preference : null;
  }

  addPreference(type, preference) {
    if (this.hasPreference(type)) {
      this.removePreference(type);
    }
    this.user.preferences.push({ type, preference });
    this.storeUser();
  }

  removePreference(type) {
    this.user.preferences = this.user.preferences.filter(
      pref => pref.type !== type
    );
    this.storeUser();
  }

  getUser() {
    return this.user;
  }
}

export default new UserApi(localStorage);
