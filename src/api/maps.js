class MapsApi {
  init(yandexMapsApi) {
    this.api = yandexMapsApi;
  }

  isBrowserSupported() {
    return navigator.geolocation;
  }

  getCurrentLocation() {
    return new Promise(resolve =>
      navigator.geolocation.getCurrentPosition(resolve)
    ).then(pos => pos.coords);
  }
}

export default new MapsApi();
