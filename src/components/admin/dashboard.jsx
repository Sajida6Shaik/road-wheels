import React from "react";
import Customers from "./ListCustomers";
import Hosts from "./ListHost";
import Bookings from "./ListBooking";
import Routes from "./ListRoutes";
import Payments from "./ListPayment";
import Cars from "../../common-components/ListCarDetails";
const dashboard = () => {
  return (
    <div className="row m-0 mt-1">
      <div
        style={{
          border: "2px solid #000",
          borderRadius: "5px",
          padding: "20px",
          width: "fit-content",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            color: "green",
            fontWeight: "bold",
            margin: "0",
            textAlign: "left", // Aligning the text to the left
          }}
        >
          Welcome to AdminDashboard
        </h1>
      </div>

      <div className="col-12 p-0 d-flex align-items-start">
        {/* <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist"> */}
        <ul
          style={{ height: "450px" }}
          class=" nav flex-column nav-pills me-3"
          id="pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <li class="nav-item w-100 p-2 mt-5" role="presentation">
            <button
              class="nav-link w-100 active"
              id="pills-cars-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-cars"
              type="button"
              role="tab"
              aria-controls="pills-cars"
              aria-selected="true"
            >
              Cars
            </button>
          </li>
          <li class="nav-item w-100 p-2 " role="presentation">
            <button
              class="nav-link w-100"
              id="pills-customers-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-customers"
              type="button"
              role="tab"
              aria-controls="pills-customers"
              aria-selected="false"
            >
              Customers
            </button>
          </li>
          <li class="nav-item w-100 p-2" role="presentation">
            <button
              class="nav-link w-100"
              id="pills-hosts-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-hosts"
              type="button"
              role="tab"
              aria-controls="pills-hosts"
              aria-selected="false"
            >
              Hosts
            </button>
          </li>
          <li class="nav-item w-100 p-2" role="presentation">
            <button
              class="nav-link w-100 "
              id="pills-bookings-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-bookings"
              type="button"
              role="tab"
              aria-controls="pills-bookings"
              aria-selected="false"
            >
              Bookings
            </button>
          </li>
          <li class="nav-item w-100 p-2" role="presentation">
            <button
              class="nav-link w-100"
              id="pills-routes-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-routes"
              type="button"
              role="tab"
              aria-controls="pills-routes"
              aria-selected="false"
            >
              Routes
            </button>
          </li>
          <li class="nav-item w-100 p-2" role="presentation">
            <button
              class="nav-link w-100"
              id="pills-payments-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-payments"
              type="button"
              role="tab"
              aria-controls="pills-payments"
              aria-selected="false"
            >
              Payments
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-cars"
            role="tabpanel"
            aria-labelledby="pills-cars-tab"
          >
            <Cars />
          </div>
          <div
            class="tab-pane fade"
            id="pills-customers"
            role="tabpanel"
            aria-labelledby="pills-customers-tab"
          >
            <Customers />
          </div>
          <div
            class="tab-pane fade"
            id="pills-hosts"
            role="tabpanel"
            aria-labelledby="pills-hosts-tab"
          >
            <Hosts />
          </div>
          <div
            class="tab-pane fade"
            id="pills-bookings"
            role="tabpanel"
            aria-labelledby="pills-bookings-tab"
          >
            <Bookings />
          </div>
          <div
            class="tab-pane fade"
            id="pills-routes"
            role="tabpanel"
            aria-labelledby="pills-routes-tab"
          >
            <Routes />
          </div>
          <div
            class="tab-pane fade"
            id="pills-payments"
            role="tabpanel"
            aria-labelledby="pills-payments-tab"
          >
            <Payments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
