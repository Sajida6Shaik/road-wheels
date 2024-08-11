import React, { useState } from "react";
import { useEffect } from "react";
import CustomerServices from "../../services/CustomerServices";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ListCustomers = () => {
  //const [state variable,function that can chnage the state variable]
  const [CustomerArray, setCustomerArray] = useState([]);

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
    <div className="container">
      <ToastContainer />

      {console.log("Application Rendered")}
      <h3 className="text-center">List of Customers Data</h3>
      <Link to="/addcustomer" className="btn btn-primary float-end mb-2">
        Add Customer
      </Link>

      <table className="table table-dark table-striped">
        <thead>
          <tr className="table-secondary">
            {/* <th>CustomerId</th> */}
            <th>CustomerName</th>
            <th>EmailId</th>
            <th> Age</th>
            <th> Area</th>
            <th> Date</th>
            <th> City</th>
            <th>Actions</th>
            <th>Delete</th>
          </tr>
        </thead>
        {CustomerArray.length > 0 ? (
          <tbody>
            {CustomerArray.map((customer, key) => (
              // returntype
              <tr key={key}>
                {/* <td>{customer.custid}</td> */}
                <td>{customer.user.username}</td>
                <td>{customer.emailId}</td>
                <td>{customer.age}</td>
                <td>{customer.area}</td>
                <td>{customer.date}</td>
                <td>{customer.city}</td>
                <td>
                  <Link
                    to={`/customer/update/${customer.custId}`}
                    className="btn btn-success"
                  >
                    Update
                  </Link>
                </td>
                {/* <td><Link to={`/delete/${customer.custId}`} className='btn btn-danger'>Delete</Link></td> */}
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCustomer(customer.custId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="8"> No Data To Display</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};
export default ListCustomers;
