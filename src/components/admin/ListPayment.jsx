import React, { useState } from "react";
import { useEffect } from "react";
import PaymentServices from "../../services/PaymentServices";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

export const ListPayment = () => {
  //const [state variable,function that can chnage the state variable]
  const [PaymentArray, setPaymentArray] = useState([]);
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
  const deletePayment = (id) => {
    console.log("Delete payment handler fired.Id value received=", id);

    PaymentServices.deletePayment(id)
      .then((response) => {
        console.log(
          "Response received from delete api..." + JSON.stringify(response.data)
        );
        fetchAllPayments();
      })
      .catch((error) => {
        console.log("error received from delete api..", error);
      });
  };

  const fetchAllPayments = () => {
    console.log("fetchAllPayments fired..");

    PaymentServices.getAllPayments().then((response) => {
      console.log("Response received from API", response.data);

      setPaymentArray(response.data);
      console.log("State variable  assigned with response.data");
    });
  };

  //arrow function and dependency array

  useEffect(() => {
    console.log("UseEffect Hook Fired..........");
    fetchAllPayments();

    PaymentServices.getAllPayments().then((response) => {
      console.log("Response received from API", response.data);

      setPaymentArray(response.data);
      console.log("State variable  assigned with response.data");
    });
  }, []);

  return (
    <div className="">
      {console.log("Application Rendered")}
      {/* <h3 className="text-center">List of PaymentDetails</h3> */}
      <Typography variant="h4" className="text-center">
        List of Payments
      </Typography>

      {/* <Link to ="/addpayment" className='btn btn-primary float-end mb-2'>Add Payment</Link> */}
      {/* Admin access is not there for add payment only customer has */}

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Payment Type</TableCell>
                <TableCell>Payment Price</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Payment Date</TableCell>
                <TableCell>Customer EmailID</TableCell>
                <TableCell>Customer Area</TableCell>
                <TableCell>Customer City </TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Delete </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PaymentArray.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((payment, key) => {
                return (
                  <TableRow hover tabIndex={-1} key={key}>
                    <TableCell>{payment.paymentType}</TableCell>
                    <TableCell>{payment.paymentPrice}</TableCell>
                    <TableCell>{payment.customer.user.username}</TableCell>
                    <TableCell>{payment.customer.date}</TableCell>
                    <TableCell>{payment.customer.emailId}</TableCell>
                    <TableCell>{payment.customer.area}</TableCell>
                    <TableCell>{payment.customer.city}</TableCell>

                    <TableCell>
                      <Link
                        to={`/payment/update/${payment.paymentId}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                    </TableCell>
                    <TableCell>
                      <button
                        className="btn btn-danger"
                        onClick={() => deletePayment(payment.paymentId)}
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
          count={PaymentArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
export default ListPayment;
