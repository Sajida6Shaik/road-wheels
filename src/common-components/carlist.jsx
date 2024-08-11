import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMapMarkerAlt, faChair, faGasPump, faCheck,faTachometerAlt,faCar } from '@fortawesome/free-solid-svg-icons';


const CarList = ({ carObj, index }) => {
  const navigate = useNavigate();
  return (
    <div className="card p-0">
      <img
        src={require(`../assests/car${index}.jpg`)}
        className="card-img-top "
        style={{ height: "200px" }}
        alt="..."
      />
      <div className="card-body pb-0">
        {/* <div>{carObj.price}</div> */}
        <h5 className="card-title">< FontAwesomeIcon icon={ faCar }/> {carObj.carModel}</h5>
        <p className="card-text">< FontAwesomeIcon icon={ faChair }/> Seatings:{carObj.seating}</p>
        <p className="card-text">< FontAwesomeIcon icon={ faGasPump }/> FuelType:{carObj.fuelType}</p>
        <p className="card-text">< FontAwesomeIcon icon={ faTachometerAlt }/> mileage:{carObj.mileage}</p>

      </div>
      <hr />
      <div className="card-body">
        <div>
          <p className="card-text"> < FontAwesomeIcon icon={ faCheck }/>Available from 13 February</p>
          {/* <h5>$399/hr</h5> */}
        </div>
        <div>
        <h5 className="card-text"> < FontAwesomeIcon icon={faDollarSign }/>{carObj.price}/day</h5> 
        <p className="card-text"> < FontAwesomeIcon icon={faMapMarkerAlt  }/> {carObj.location}</p>
          {/* Bangalore */}
          <button type="button" className="btn btn-primary " style={{'float': 'right'}} onClick={() => navigate("/user/cardetail?carId="+carObj.carId)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;










// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDollarSign, faMapMarkerAlt, faChair, faGasPump, faCheck,faTachometerAlt,faCar } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const CarList = ({ carObj, index }) => {
//   const navigate = useNavigate();

//   const handleSearch = async () => {
//     try {
//       // Replace 'source', 'destination', and 'fromDate' with actual values
//       const response = await axios.get(`/get/source/destination/fromdate`);
//       console.log(response.data);
//       // Handle response data as needed
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       {/* <h1>Car Search</h1> */}
//       <button onClick={handleSearch}>Search</button>
//       <div className="card p-0">
//         <img
//           src={require(`../../assets/car${index}.jpg`)}
//           className="card-img-top"
//           style={{ height: "200px" }}
//           alt="..."
//         />
//         <div className="card-body pb-0">
//           <h5 className="card-title"><FontAwesomeIcon icon={faCar}/> {carObj.carModel}</h5>
//           <p className="card-text"><FontAwesomeIcon icon={faChair}/> Seatings: {carObj.seating}</p>
//           <p className="card-text"><FontAwesomeIcon icon={faGasPump}/> FuelType: {carObj.fuelType}</p>
//           <p className="card-text"><FontAwesomeIcon icon={faTachometerAlt}/> Mileage: {carObj.mileage}</p>
//         </div>
//         <hr />
//         <div className="card-body">
//           <div>
//             <p className="card-text"><FontAwesomeIcon icon={faCheck}/> Available from 13 February</p>
//           </div>
//           <div>
//             <h5 className="card-text"><FontAwesomeIcon icon={faDollarSign}/>{carObj.price}/day</h5>
//             <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt}/> {carObj.location}</p>
//             <button type="button" className="btn btn-primary" style={{ float: 'right' }} onClick={() => navigate("/user/cardetail")}>
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarList;