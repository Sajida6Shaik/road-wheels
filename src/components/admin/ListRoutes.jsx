import React, { useState } from "react";
import { useEffect } from "react";
import RoutesServices from "../../services/RoutesService";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
// toast.configure();
export const ListRoutes = () => {
  //const [state variable,function that can chnage the state variable]
  const [RoutesArray, setRoutesArray] = useState([]);

  const navigate = useNavigate();

  const deleteRoutes = (id) => {
    console.log("Delete  Route handler fired.Id value received=", id);

    RoutesServices.deleteRoutes(id)
      .then((response) => {
        console.log(
          "Response received from delete api..." + JSON.stringify(response.data)
        );
        fetchAllRoutes();
      })
      .catch((error) => {
        console.log("error received from delete api..", error);
      });
  };

  const fetchAllRoutes = () => {
    console.log("fetchAllRoutes fired..");

    RoutesServices.getAllRoutes()
      .then((response) => {
        console.log("Response received from API", response.data);

        setRoutesArray(response.data);
        console.log("State variable  assigned with response.data");
      })
      .catch((error) => {
        console.log("Error in getting all routes", error);
        toast(error.message);
      });
  };

  //arrow function and dependency array

  useEffect(() => {
    console.log("UseEffect Hook Fired..........");
    fetchAllRoutes();

    //  RoutesServices.getAllRoutes().then((response)=>{
    //   console.log("Response received from API",response.data)

    //  setRoutesArray(response.data);
    //  console.log("State variable  assigned with response.data")

    // })
  }, []);

  return (
    <div className="container">
      {console.log("Application Rendered")}
      <h3 className="text-center">List of Routes Details</h3>
      <Link to="/addroutes" className="btn btn-primary float-end mb-2 ">
        Add Routes
      </Link>

      <table className="table table-dark table-striped">
        <thead>
          <tr className="table-success">
            {/* <th>Route Id</th> */}
            <th>CustomerName</th>
            <th>Source Location</th>
            <th>Destination Location</th>
            <th>Start-Date</th>
            <th>End-Date</th>
            <th>CarModel</th>
            {/* <th>CarID</th> */}
            <th>HostName</th>
            <th>HostContact</th>
            <th>Actions</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {RoutesArray.map((route, key) => (
            // returntype
            <tr key={key}>
              {/* <td>{route.id}</td> */}
              <td>{route.booking.customer.user.username}</td>

              <td>{route.sourceLocation}</td>
              <td>{route.destinationLocation}</td>
              <td>{route.startDate}</td>
              <td>{route.endDate}</td>

              <td>{route.booking.carDetails.carModel}</td>
              {/* <td>{route.booking.carDetails.carId}</td> */}
              <td>{route.booking.carDetails.host.hostName}</td>
              <td>{route.booking.carDetails.host.hostContact}</td>

              <td>
                <Link
                  to={`/routes/update/${route.id}`}
                  className="btn btn-success"
                >
                  Update
                </Link>
              </td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRoutes(route.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListRoutes;
