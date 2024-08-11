import axios from "axios";
const BASE_REST_API_URL = "http://localhost:9194/host";
let token = localStorage.getItem("JWT");
let loginId = localStorage.getItem("id");
class HostServices {
  getAllHosts() {
    return axios.get(BASE_REST_API_URL + "/getallHosts", {
      headers: {
        Authorization: token,
      },
    });
  }
  addHost(host) {
    return axios.post(BASE_REST_API_URL + "/add", host, {
      headers: {
        Authorization: token,
      },
    });
  }

  getHostById(id) {
    return axios.get(BASE_REST_API_URL + "/getone/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }

  updateHost(id, host) {
    return axios.put(BASE_REST_API_URL + "/update/" + id, host, {
      headers: {
        Authorization: token,
      },
    });
  }

  deleteHost(id) {
    return axios.delete(BASE_REST_API_URL + "/delete/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }
  getCarsManagedByHost() {
    return axios.get(BASE_REST_API_URL + "/" + loginId + "/cars", {
      headers: {
        Authorization: token,
      },
    });
  }

  getHosts() {
    return axios.get(BASE_REST_API_URL + "/hosts", {
      headers: {
        Authorization: token,
      },
    });
  }
}
export default new HostServices();
