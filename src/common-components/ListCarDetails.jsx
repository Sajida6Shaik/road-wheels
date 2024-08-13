import React, { useState } from "react";
import CarServices from "../services/CarServices";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import HostServices from "../services/HostServices";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
// toast.configure();

const ListCarDetails = () => {
  //const [state variable,function that can chnage the state variable]
  const [carArray, setCarArray] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const navigate = useNavigate();
  // Delete Logic

  const deleteCar = (id) => {
    console.log("Delete car handler fired.Id value received=", id);

    CarServices.deleteCar(id)
      .then((response) => {
        console.log(
          "Response received from delete api..." + JSON.stringify(response.data)
        );
        fetchAllCars();
      })
      .catch((error) => {
        console.log("error received from delete api..", error);
      });
  };

  const fetchAllCars = () => {
    console.log("fetchAllCars fired..");

    CarServices.getAllCars()
      .then((response) => {
        console.log("Response received from API", response.data);

        setCarArray(response.data);
        console.log("State variable  assigned with response.data");
      })
      .catch((error) => {
        console.log("Error in getting all cars", error);
        toast(error.message);
      });
  };

  const fetchHostCars = () => {
    console.log("fetchAllCars fired..");

    HostServices.getCarsManagedByHost()
      .then((response) => {
        console.log("Response received from API", response.data);

        setCarArray(response.data);
        console.log("State variable  assigned with response.data");
      })
      .catch((error) => {
        console.log("Error in getting all cars", error);
        toast(error.message);
      });
  };

  //
  //arrow function and dependency array
  useEffect(() => {
    console.log("UseEffect Hook Fired..........");
    let role = localStorage.getItem("role");
    if (role == "HOST") {
      fetchHostCars();
    } else {
      fetchAllCars();
    }
  }, []);

  return (
    <div className="">
      <ToastContainer />
      {/* {console.log("Application Rendered")} */}
      {/* <h3 className="text-center">List Of CarDetails</h3> */}
      <Typography variant="h4" className="text-center">List of Cars</Typography>
      <Link to="/addcar" className="btn btn-primary float-end mb-2">
        Add Car
      </Link>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>CarModel</TableCell>
                <TableCell>Price</TableCell>
                {/* <TableCell>Mileage</TableCell> */}
                <TableCell>FuelType</TableCell>
                <TableCell>SourceLocation</TableCell>
                <TableCell>DestinationLocation</TableCell>
                <TableCell>FromDate</TableCell>
                <TableCell>ToDate</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>CarType</TableCell>
                <TableCell>Seating</TableCell>
                {/* <TableCell>Insurance</TableCell> */}
                <TableCell>Location</TableCell>
                <TableCell>Availability</TableCell>
                {/* <TableCell>HostName</TableCell> */}
                <TableCell>Actions</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {carArray
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((car, key) => {
                  return (
                    <TableRow hover tabIndex={-1} key={key}>
                      <TableCell>{car.carModel}</TableCell>
                      <TableCell>{car.price}</TableCell>
                      {/* localStorage.setItem('price', CarDetails.price); */}
                      {/* <TableCell>{car.mileage}</TableCell> */}
                      <TableCell>{car.fuelType}</TableCell>
                      <TableCell>{car.sourceLocation}</TableCell>
                      <TableCell>{car.destinationLocation}</TableCell>
                      <TableCell>{car.fromDate}</TableCell>
                      <TableCell>{car.toDate}</TableCell>
                      <TableCell>{car.color}</TableCell>
                      <TableCell>{car.carType}</TableCell>
                      <TableCell>{car.seating}</TableCell>
                      {/* <TableCell> */}
                      {/* {car.insurance == "true" ? "Yes" : "No"} */}
                      {/* </TableCell> */}
                      <TableCell>{car.location}</TableCell>
                      <TableCell>{car.availability ? "Yes" : "No"}</TableCell>
                      {/* <TableCell>{car.host.hostName}</TableCell> */}

                      <TableCell>
                        <Link
                          to={`/car/update/${car.carId}`}
                          className="btn btn-success"
                        >
                          Update
                        </Link>
                      </TableCell>
                      <TableCell>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteCar(car.carId)}
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={carArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ListCarDetails;
