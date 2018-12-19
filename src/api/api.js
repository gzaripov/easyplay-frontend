const origin = "https://ae90a536.ngrok.io";

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
  },
  setActivities: {
    method: "post",
    url: "/setActivities"
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
        best,
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
        best: !!best,
        address,
        location: [longitude, latitude],
        type
      })
    );
  }

  getUnits(id, activity) {
    return this.requestJson(REQUEST.getUnits, {
      id,
      radius: 4000,
      activity
    }).then(units => Promise.resolve(this.mapUnitsToPlaygrounds(units)));
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

  setActivities(id, prefs) {
    return this.request(REQUEST.setActivities, { id, prefs });
  }
}

export default new Api();
