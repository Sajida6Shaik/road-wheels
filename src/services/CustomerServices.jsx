import axios from "axios";
const BASE_REST_API_URL = "http://localhost:9194/customer";
let token = localStorage.getItem("JWT");
let loginId = localStorage.getItem("id");

class CustomerServices {
  getAllCustomers() {
    return axios.get(BASE_REST_API_URL + "/getallcustomers", {
      headers: {
        Authorization: token,
      },
    });
  }

  addCustomer(customer) {
    return axios.post(BASE_REST_API_URL + "/add", customer);
  }

  getCustomerById(id) {
    return axios.get(BASE_REST_API_URL + "/getone/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }

  updateCustomer(id, customer) {
    return axios.put(BASE_REST_API_URL + "/update/" + id, customer, {
      headers: {
        Authorization: token,
      },
    });
  }

  deleteCustomer(id) {
    return axios.delete(BASE_REST_API_URL + "/delete/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }

  getCustomerBookings() {
    return axios.get(BASE_REST_API_URL + "/" + loginId + "/bookings", {
      headers: {
        Authorization: token,
      },
    });
  }
}
export default new CustomerServices();
