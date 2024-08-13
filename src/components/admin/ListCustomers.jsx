import React, { useState } from "react";
import { useEffect } from "react";
import CustomerServices from "../../services/CustomerServices";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
export const ListCustomers = () => {
  //const [state variable,function that can chnage the state variable]
  const [CustomerArray, setCustomerArray] = useState([]);
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

  const deleteCustomer = (id) => {
    console.log("Delete customer handler fired.Id value received=", id);

    CustomerServices.deleteCustomer(id)
      .then((response) => {
        console.log(
          "Response received from delete api..." + JSON.stringify(response.data)
        );
        fetchAllCustomers();
      })
      .catch((error) => {
        console.log("error received from delete api..", error);
      });
  };

  const fetchAllCustomers = () => {
    console.log("fetchAllCustomers fired..");

    CustomerServices.getAllCustomers()
      .then((response) => {
        console.log("Response received from API", response.data);

        setCustomerArray(response.data);
        console.log("State variable  assigned with response.data");
      })
      .catch((error) => {
        console.log("Error in getting all customers", error);
        toast(error.message);
      });
  };

  //arrow function and dependency array

  useEffect(() => {
    console.log("UseEffect Hoook Fired.......");
    fetchAllCustomers();
  }, []);

  return (
    <div className="">
      <ToastContainer />

      {console.log("Application Rendered")}
      <Typography variant="h4" className="text-center">
        List of Customers
      </Typography>

      <Link to="/addcustomer" className="btn btn-primary float-end mb-2">
        Add Customer
      </Link>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>CustomerName</TableCell>
                <TableCell>EmailId</TableCell>
                <TableCell> Age</TableCell>
                <TableCell> Area</TableCell>
                <TableCell> Date</TableCell>
                <TableCell> City</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CustomerArray.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((customer, key) => {
                return (
                  <TableRow hover tabIndex={-1} key={key}>
                    <TableCell>{customer.user.username}</TableCell>
                    <TableCell>{customer.emailId}</TableCell>
                    <TableCell>{customer.age}</TableCell>
                    <TableCell>{customer.area}</TableCell>
                    <TableCell>{customer.date}</TableCell>
                    <TableCell>{customer.city}</TableCell>
                    <TableCell>
                      <Link
                        to={`/customer/update/${customer.custId}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                    </TableCell>
                    {/* <TableCell><Link to={`/delete/${customer.custId}`} className='btn btn-danger'>Delete</Link></TableCell> */}
                    <TableCell>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteCustomer(customer.custId)}
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
          count={CustomerArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
export default ListCustomers;
