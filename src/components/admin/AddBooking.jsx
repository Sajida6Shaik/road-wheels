import React, { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import BookingServices from "../../services/BookingServices";

export const AddBooking = () => {
  const [price, setPrice] = useState("");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOfLocation, setDropOfLocation] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const changeTitle = () => {
    if (id) {
      console.log("returned Title update booking.Id value from url: ", { id });
      return <h2 className="text-center "> Update Booking</h2>;
    } else {
      console.log("returned Title Add booking.Id value from url:", { id });

      return <h2 className="text-center "> Add Booking</h2>;
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("Id value obtained from url using useParams()", id);
    // for updation
    if (id) {
      BookingServices.getBookingById(id)
        .then((response) => {
          console.log(
            "Response received from API",
            JSON.stringify(response.data)
          );
          setPrice(response.data.price);
          setFromDate(response.data.fromDate);
          setToDate(response.data.toDate);
          setPickupLocation(response.data.pickupLocation);
          setDropOfLocation(response.data.dropOfLocation);
          setBookingStatus(response.data.bookingStatus);

          console.log("State variables changed");
          console.log(" changed State variables ");
          console.log(" changed State vars ", {
            price,
            fromDate,
            toDate,
            pickupLocation,
            dropOfLocation,
            bookingStatus,
          });
        })
        .catch((error) => {
          console.log("Error received from Api..", error);
        });
    }
  }, []);

  const saveOrUpdateBooking = (e) => {
    e.preventDefault();

    const booking = {
      price,
      fromDate,
      toDate,
      pickupLocation,
      dropOfLocation,
      bookingStatus,
    };
    console.log("Car object received form form:", booking);
    if (id) {
      //update logic
      BookingServices.updateBooking(id, booking)
        .then((response) => {
          console.log(
            "Response received from put api..." + JSON.stringify(response.data)
          );
          navigate("/booking");
        })
        .catch((error) => {
          console.log("error received from save api..", error);
        });
    }

    //save logic
    else {
      BookingServices.addBooking(booking)
        .then((response) => {
          console.log(
            "Response received from save api..." + JSON.stringify(response.data)
          );
        })
        .catch((error) => {
          console.log("error received from save api..", error);
        });
    }
  };

  return (
    <div className="container mt-2 mb-5 ">
      <div className="card col-md-6 offset-md-3">
        {changeTitle()}
        <div className="card-body">
          <form>
            {/*2. price text box */}
            <div className="form-group mb-2">
              <label className="form-label">Price</label>
              <input
                type="text"
                placeholder="Enter your price"
                name="price"
                value={price}
                className="form-control"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            {/*From Date text box */}
            <div className="form-group mb-2">
              <label className="form-label">FromDate</label>
              <input
                type="text"
                placeholder="Enter your From-Date (eg:yyyy-mm-dd)"
                name="from-Date"
                value={fromDate}
                className="form-control"
                onChange={(e) => {
                  setFromDate(e.target.value);
                }}
              />
            </div>
            {/* To-Date text box */}
            <div className="form-group mb-2">
              <label className="form-label">ToDate</label>
              <input
                type="text"
                placeholder="Enter your To-Date (eg:yyyy-mm-dd)"
                name="to-Date"
                value={toDate}
                className="form-control"
                onChange={(e) => {
                  setToDate(e.target.value);
                }}
              />
            </div>
            {/* 5  text box */}
            <div className="form-group mb-2">
              <label className="form-label">PickUpLocation</label>
              <input
                type="text"
                placeholder="Enter your pickupLocation"
                name="pickupLocation"
                value={pickupLocation}
                className="form-control"
                onChange={(e) => {
                  setPickupLocation(e.target.value);
                }}
              />
            </div>
            {/*4. Drop Of Location text box */}
            <div className="form-group mb-2">
              <label className="form-label">DropOfLocation</label>
              <input
                type="text"
                placeholder="Enter your DropOfLocation"
                name="dropOfLocation"
                value={dropOfLocation}
                className="form-control"
                onChange={(e) => {
                  setDropOfLocation(e.target.value);
                }}
              />
            </div>
            {/*4. Drop Of Location text box */}
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setBookingStatus(e.target.value)}
              value={bookingStatus}
            >
              <option>Select Your Booking Status</option>
              <option value="UpComing">UpComing</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="NotServed">NotServed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            {/* submit button */}
            <button
              onClick={(e) => saveOrUpdateBooking(e)}
              className="btn btn-success"
            >
              Save Booking
            </button>
            &nbsp;&nbsp;
            <Link to="/booking" className="btn btn-danger">
              Cancel
            </Link>
            &nbsp;&nbsp;
          </form>
        </div>
      </div>
    </div>
  );
};
