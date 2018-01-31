class Api {
  static dataSales() {
    return fetch('http://localhost:8080/api/sales')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      })
    }
}

export default Api;
