import HostServices from "../services/HostServices";
import React from "react";
import { AddCar } from "../common-components/AddCar";
import ListCarDetails from "../common-components/ListCarDetails";

import CarList from "../common-components/carlist";
import { useState, useEffect } from "react";
import HostCarDetail from "../host/HostCarDetail";

const Dashboard = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    HostServices.getCarsManagedByHost()
      .then((response) => {
        console.log(response);
        setCarData(response.data || []);
      })
      .catch((error) => console.error("Error in Fetching projects:", error));
  }, []);

  return (
    <div className="row m-0 mt-1">
      <div className="col-12 text-center mb-3">
        <h1
          style={{
            fontSize: "24px",
            color: "green",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Welcome to HostDashboard
        </h1>
      </div>

      <div className="col-12 p-0">
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-add-car"
            role="tabpanel"
            aria-labelledby="pills-add-car-tab"
          >
            <AddCar />
          </div>
          <div
            className="tab-pane fade"
            id="pills-edit-car"
            role="tabpanel"
            aria-labelledby="pills-edit-car-tab"
          >
            <ListCarDetails />
          </div>
          {/* <div className="tab-pane fade" id="pills-host-cars" role="tabpanel" aria-labelledby="pills-host-cars-tab">< CarDetail /></div> */}
          <div
            className="tab-pane fade"
            id="pills-host-cars"
            role="tabpanel"
            aria-labelledby="pills-host-cars-tab"
          >
            {carData.map((item, index) => (
              <div className="col-3">
                {/* <CarList carObj={item} index={index}></CarList> */}
                <HostCarDetail carObj={item} index={index}></HostCarDetail>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
