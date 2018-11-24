import uniqid from "uniqid";
import ServerApi from "./api";

export const PREFERENCE = {
  selectedActivities: 0,
  radius: 1
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
      id: "jovnsy6y", //uniqid(),
      preferences: [{ type: PREFERENCE.radius, preference: 8000 }]
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

  getSelectedActivities() {
    return ServerApi.getActivities().then(activities => {
      const selected = this.getPreference(PREFERENCE.selectedActivities);
      if (selected) {
        const acts = activities.filter(({ id }) => selected.includes(id));
        return Promise.resolve(acts);
      }
      return Promise.resolve([]);
    });
  }
}

export default new UserApi(localStorage);
