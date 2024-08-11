// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Register from './components/Register';
// import Testimonials from './components/Testimonials';
 
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/testimonials" element={<Testimonials />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Register from './components/Register';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import CarList from './components/CarList';
import Login from './components/Login';
import CarDetail from './components/CarDetail';
import { AddPayment } from './components/AddPayment';
import PaymentForm from './components/PaymentForm'
import SuccessPage from './components/SuccessPage'

import UserDashboard from './components/user/dashboard'
import Payment from './components/PaymentForm'
import AdminDashboard from './components/admin/dashboard'
import UserCarDetail from './common-components/cardetail'
import HostDashboard from './host/dashboard'
import HostCarDetail from './host/HostCarDetail';
import ListCarDetails from "./common-components/ListCarDetails";
import Error from "./common-components/Error";
import { AddCar } from "./common-components/AddCar";

import ListHost from "./components/admin/ListHost";
import { AddHost } from "./common-components/AddHost";
import ListPayment from "./components/admin/ListPayment";
import ListBooking from "./components/admin/ListBooking";
import ListCustomers from "./components/admin/ListCustomers";
import { AddBooking } from "./components/admin/AddBooking";
import { AddCustomer } from "./common-components/AddCustomer";
import { AddRoutes } from "./components/admin/AddRoutes";
import ListRoutes from "./components/admin/ListRoutes";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/cardetails/:id" element={<CarDetail />} />
        <Route path="/cardetails/:id" element={<CarDetail />} />
        <Route path="/addpayment" element={<AddPayment />} />
        <Route path="/addpayment" element={<AddPayment />} />
        <Route path="/user/Payment" element={<PaymentForm />} />
        <Route path="/user/Payment" element={<PaymentForm />} />
        <Route path="/user/SuccessPage" element={<SuccessPage />}></Route>
        <Route path="/user/SuccessPage" element={<SuccessPage />}></Route>
         
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          <Route path="/host/dashboard" element={<HostDashboard />}></Route>
          <Route path="/host/dashboard" element={<HostDashboard />}></Route>
          <Route path="/host/cardetail" element={<HostCarDetail />}></Route>
          <Route path="/host/cardetail" element={<HostCarDetail />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/user/cardetail" element={<UserCarDetail />}></Route>
          <Route path="/user/cardetail" element={<UserCarDetail />}></Route>

          <Route path="/user/Payment" element={<Payment />}></Route>
          <Route path="/user/Payment" element={<Payment />}></Route>
          <Route path="/user/SuccessPage" element={<SuccessPage />}></Route>
          <Route path="/user/SuccessPage" element={<SuccessPage />}></Route>
          <Route path="/host/dashboard" element={<HostDashboard />}></Route>
          <Route path="/host/dashboard" element={<HostDashboard />}></Route>

          <Route path="/getallcars" element={<ListCarDetails />} />
          <Route path="/getallcars" element={<ListCarDetails />} />
          <Route path="/car" element={<ListCarDetails />} />
          <Route path="/car" element={<ListCarDetails />} />
          <Route path="*" element={<Error />} />
          <Route path="*" element={<Error />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/car/update/:id" element={<AddCar />} />

          <Route path="/getallhosts" element={<ListHost />} />
          <Route path="/host" element={<ListHost />} />
          <Route path="/addhost" element={<AddHost />} />
          <Route path="/host/update/:id" element={<AddHost />} />

          <Route path="/getallpayments" element={<ListPayment />} />
          <Route path="/payment" element={<ListPayment />} />
          <Route path="/addpayment" element={<AddPayment />} />
          <Route path="/payment/update/:id" element={<AddPayment />} />

          <Route path="/getallbookings" element={<ListBooking />} />
          <Route path="/booking" element={<ListBooking />} />
          <Route path="/addbooking" element={<AddBooking />} />
          <Route path="/booking/update/:id" element={<AddBooking />} />

          <Route path="/getallcustomers" element={<ListCustomers />} />
          <Route path="/customer" element={<ListCustomers />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customer/update/:id" element={<AddCustomer />} />

          <Route path="/getallroutes" element={<ListRoutes />} />
          <Route path="/routes" element={<ListRoutes />} />
          <Route path="/addroutes" element={<AddRoutes />} />
          <Route path="/routes/update/:id" element={<AddRoutes />} />



         
       
      </Routes>
    </Router>
  );
}

export default App;

