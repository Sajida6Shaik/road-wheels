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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/carlist" element={<CarList />} />
        
         
       
      </Routes>
    </Router>
  );
}

export default App;

