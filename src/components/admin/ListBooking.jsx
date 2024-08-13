import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookingServices from "../../services/BookingServices";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

export const ListBooking = () => {
  //const [state variable,function that can chnage the state variable]
  const [BookingArray, setBookingArray] = useState([]);
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

  const deleteBooking = (id) => {
    console.log("Delete employee handler fired.Id value received=", id);

    BookingServices.deleteBooking(id)
      .then((response) => {
        console.log(
          "Response received from delete api..." + JSON.stringify(response.data)
        );
        fetchAllBookings();
      })
      .catch((error) => {
        console.log("error received from delete api..", error);
      });
  };
  const fetchAllBookings = () => {
    console.log("fetchAllBookings fired..");
    BookingServices.getAllBookings().then((response) => {
      console.log("Response received from API", response.data);

      setBookingArray(response.data);
      console.log("State variable  assigned with response.data");
    });
  };

  //arrow function and dependency array
  useEffect(() => {
    console.log("UseEffect Hoook Fired.......");
    fetchAllBookings();
  }, []);

  return (
    <div className="">
      {console.log("Application Rendered")}
      {/* <h3 className="text-center"> List Of Booking Details</h3> */}
      <Typography variant="h4" className="text-center">
        List of Bookings
      </Typography>

      <Link to="/addbooking" className="btn btn-primary float-end mb-2">
        Add Bookings
      </Link>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>CustomerName</TableCell>
                <TableCell>PickUp Location</TableCell>
                <TableCell>DropOff Location</TableCell>
                <TableCell>From-Date</TableCell>
                <TableCell>To-Date</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>CarModel</TableCell>
                {/* <TableCell>CarID</TableCell> */}
                <TableCell>HostName</TableCell>
                <TableCell>HostContact</TableCell>
                <TableCell>BookingStatus</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {BookingArray.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((booking, key) => {
                return (
                  <TableRow hover tabIndex={-1} key={key}>
                    <TableCell>{booking.customer.user.username}</TableCell>

                    <TableCell>{booking.pickupLocation}</TableCell>
                    <TableCell>{booking.dropOfLocation}</TableCell>
                    <TableCell>{booking.fromDate}</TableCell>
                    <TableCell>{booking.toDate}</TableCell>
                    <TableCell>{booking.price}</TableCell>

                    <TableCell>{booking.carDetails.carModel}</TableCell>
                    {/* <TableCell>{booking.carDetails.carId}</TableCell> */}
                    <TableCell>{booking.carDetails.host.hostName}</TableCell>
                    <TableCell>{booking.carDetails.host.hostContact}</TableCell>
                    <TableCell>{booking.bookingStatus}</TableCell>
                    <TableCell>
                      <Link
                        to={`/booking/update/${booking.bookingId}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                    </TableCell>

                    <TableCell>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteBooking(booking.bookingId)}
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
          count={BookingArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
export default ListBooking;
