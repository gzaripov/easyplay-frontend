const origin = "http://10.100.25.210:3000";

export const REQUEST = {
  createUser: {
    method: "post",
    url: "/createUser"
  },
  setLocation: {
    method: "post",
    url: "/setLocation"
  },
  getUnits: {
    method: "post",
    url: "/getUnits"
  },
  getActivities: {
    method: "post",
    url: "/getActivities"
  }
};

class Api {
  request({ method, url }, body) {
    const endpoint = origin + url;
    return fetch(endpoint, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  }

  requestJson(request, body) {
    return this.request(request, body).then(response =>
      this.handleResponse(response)
    );
  }

  handleResponse(response) {
    const { status } = response;
    if (status < 200 || status >= 400) {
      return Promise.reject(response);
    }
    return response.json();
  }

  createUser() {
    return this.requestJson(REQUEST.createUser);
  }

  setLocation(id, lat, lon) {
    return this.request(REQUEST.setLocation, { id, lat, lon });
  }

  mapUnitsToPlaygrounds(units) {
    return units.map(
      ({
        id,
        name: { fi: name },
        street_address: { fi: address },
        location: {
          coordinates: [latitude, longitude]
        },
        service_nodes: [
          {
            name: { en: type }
          }
        ]
      }) => ({
        id,
        name,
        address,
        location: [longitude, latitude],
        type
      })
    );
  }

  getUnits() {
    return this.requestJson(REQUEST.getUnits, { radius: 8000 }).then(units =>
      Promise.resolve(this.mapUnitsToPlaygrounds(units))
    );
  }

  getActivities() {
    return this.requestJson(REQUEST.getActivities).then(activities =>
      Promise.resolve(
        activities.map(({ title, ...rest }) => ({
          ...rest,
          title,
          icon: `/icons/${title.toLowerCase().replace(" ", "-")}.png`
        }))
      )
    );
  }
}

export default new Api();
