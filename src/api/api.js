const origin = "http://10.100.25.210:3000";

export const REQUEST = {
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
    }).then(response => this.handleResponse(response));
  }

  handleResponse(response) {
    const { status } = response;
    if (status < 200 || status >= 400) {
      return Promise.reject(response);
    }
    return response.json();
  }

  getUnits() {
    return this.request(REQUEST.getUnits, { radius: 8000 }).then(console.log);
  }

  getActivities() {
    return this.request(REQUEST.getActivities).then(activities =>
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
