import React, { useState } from "react";
import { useEffect } from "react";
import RoutesServices from "../../services/RoutesService";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
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
export const ListRoutes = () => {
  //const [state variable,function that can chnage the state variable]
  const [RoutesArray, setRoutesArray] = useState([]);
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
    <div className="">
      {console.log("Application Rendered")}
      {/* <h3 className="text-center">List of Routes Details</h3> */}
      <Typography variant="h4" className="text-center">
        List of Routes
      </Typography>

      <Link to="/addroutes" className="btn btn-primary float-end mb-2 ">
        Add Routes
      </Link>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>CustomerName</TableCell>
                <TableCell>Source Location</TableCell>
                <TableCell>Destination Location</TableCell>
                <TableCell>Start-Date</TableCell>
                <TableCell>End-Date</TableCell>
                <TableCell>CarModel</TableCell>
                {/* <TableCell>CarID</TableCell> */}
                <TableCell>HostName</TableCell>
                <TableCell>HostContact</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RoutesArray.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((route, key) => {
                return (
                  <TableRow hover tabIndex={-1} key={key}>
                    <TableCell>
                      {route.booking.customer.user.username}
                    </TableCell>

                    <TableCell>{route.sourceLocation}</TableCell>
                    <TableCell>{route.destinationLocation}</TableCell>
                    <TableCell>{route.startDate}</TableCell>
                    <TableCell>{route.endDate}</TableCell>

                    <TableCell>{route.booking.carDetails.carModel}</TableCell>
                    {/* <TableCell>{route.booking.carDetails.carId}</TableCell> */}
                    <TableCell>
                      {route.booking.carDetails.host.hostName}
                    </TableCell>
                    <TableCell>
                      {route.booking.carDetails.host.hostContact}
                    </TableCell>

                    <TableCell>
                      <Link
                        to={`/routes/update/${route.id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                    </TableCell>

                    <TableCell>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteRoutes(route.id)}
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
          count={RoutesArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
export default ListRoutes;
