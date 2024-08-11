import axios from "axios";
const BASE_REST_API_URL = "http://localhost:9194/booking";
let token = localStorage.getItem("JWT");

class BookingServices {
  getAllBookings() {
    return axios.get(BASE_REST_API_URL + "/getallBookings", {
      headers: {
        Authorization: token,
      },
    });
  }

  addBooking(booking) {
    let cid = 102;
    let carid = 4;
    return axios.post(BASE_REST_API_URL + `/add/${cid}/${carid}`, booking, {
      headers: {
        Authorization: token,
      },
    });
  }

  getBookingById(id) {
    return axios.get(BASE_REST_API_URL + "/getone/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }

  updateBooking(id, booking) {
    return axios.put(BASE_REST_API_URL + "/update/" + id, booking, {
      headers: {
        Authorization: token,
      },
    });
  }

  deleteBooking(id) {
    return axios.delete(BASE_REST_API_URL + "/delete/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }
}
export default new BookingServices();
