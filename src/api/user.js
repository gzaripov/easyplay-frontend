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
      this.createUser();
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
    return ServerApi.createUser().then(({ id }) => {
      this.user = {
        id,
        preferences: [{ type: PREFERENCE.radius, preference: 8000 }]
      };
      this.storeUser();
    });
  }

  updateLocation({ latitude, longitude }) {
    return ServerApi.setLocation(this.user.id, latitude, longitude);
  }

  getNearestPlaygrounds() {
    return ServerApi.getUnits(this.user.id);
  }

  hasPreference(type) {
    return !!this.getPreference(type);
  }

  getPreference(type) {
    const prefObject =
      this.user && this.user.preferences.find(pref => pref.type === type);
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
