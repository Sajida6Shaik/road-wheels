import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import CarServices from "../services/CarServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCheck, faCar, faChair, faGasPump, faTachometerAlt, faMapMarkerAlt, faCalendarAlt, faSnowflake } from "@fortawesome/free-solid-svg-icons";
// import SearchCars from "../user/SearchCars";
import { useSearchParams } from "react-router-dom";

const CarDetail = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [searchParams, setParams] = useSearchParams();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [carObj, setCarObj] = useState({
    // price: 50,
    // carModel: "Suzuki",
    // seating: 5,
    // AvailableDate: "13th Frebruary",
    // location: "Bangalore",
  });
  const data = [
    {
      image: require(`../assests/car1.jpg`),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require(`../assests/car2.jpg`),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require(`../assests/car3.jpg`),
      caption: "Caption",
      description: "Description Here",
    },
  ];

  useEffect(() => {
    let carId = searchParams.get("carId");
    CarServices.getCarById(carId)
      .then((response) => setCarObj(response.data))
      .catch((error) => console.error("Error in Fetching projects:", error));
  }, []);

  return (
    <div className="row m-3">
      <div className="col-6">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((slide, i) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="slider image"
                />
                <Carousel.Caption>
                  <h3>{carObj.carModel}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="col-6 car-details">
        <div className="card p-0">
          <div className="card-body pb-0">
             <h2 style={{ color: "Blue"}}>CAR DETAILS</h2>
          </div>
          <div className="card-body">
            <div>
               


              <h5 className="card-title"> CAR MODEL: < FontAwesomeIcon icon={ faCar }/>{carObj.carModel}</h5>
        <p className="card-text"> < FontAwesomeIcon icon={ faChair }/>SEATINGS: {carObj.seating}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faGasPump }/>FUELTYPE: {carObj.fuelType}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faTachometerAlt }/>MILEAGE:{carObj.mileage}</p>
        <h2 style={{ color: "Blue"}}>TRIP DETAILS</h2>
        <p className="card-text"> < FontAwesomeIcon icon={faSnowflake}/>CARTYPE: {carObj.carType}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faMapMarkerAlt }/>SOURCE LOCATION:{carObj.sourceLocation}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faMapMarkerAlt  }/>DESTINATION LOCATION:{carObj.destinationLocation}</p>
        <p className="card-text">< FontAwesomeIcon icon={faCalendarAlt}/>FROMDATE: {carObj.fromDate}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faCalendarAlt }/>TODATE: {carObj.toDate}</p>
        <h2 className="card-text"> < FontAwesomeIcon icon={faDollarSign }/>PRICE:{carObj.price}/hr</h2>

            </div>
            <div>
              
              <a
                href="/user/Payment"
                className="btn btn-success"
                style={{ float: "right" }}
              >
                <h2>CONFIRM BOOKING</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;

// import React from "react";
// import { useState, useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { useNavigate } from "react-router";
// import axios from "axios";
// import CarServices from '../../services/CarServices'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDollarSign,faCheck } from "@fortawesome/free-solid-svg-icons";
// import SearchCars from "../user/SearchCars";

// const CarDetail = () => {
//   const [index, setIndex] = useState(0);
//   const navigate = useNavigate();
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
//   const [carObj, setCarObj] = useState({
//     price: 50,
//     carModel: "Suzuki",
//     seating: 5,
//     AvailableDate: "13th Frebruary",
//     location: "Bangalore",
//   });
//   const data = [
//     {
//       image: require(`../../assets/car1.jpg`),
//       caption: "Caption",
//       description: "Description Here",
//     },
//     {
//       image: require(`../../assets/car2.jpg`),
//       caption: "Caption",
//       description: "Description Here",
//     },
//     {
//       image: require(`../../assets/car3.jpg`),
//       caption: "Caption",
//       description: "Description Here",
//     },
//   ];

//   useEffect(() => {

//     CarServices.getAllCars()
//       .then((response) => setCarObj(response.data))
//       .catch((error) => console.error("Error in Fetching projects:", error));
//   }, []);

//   return (
//     <div className="row m-3">
//       <div className="col-6">
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//           {data.map((slide, i) => {
//             return (
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={slide.image}
//                   alt="slider image"
//                 />
//                 <Carousel.Caption>
//                   <h3>{carObj.carModel}</h3>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             );
//           })}
//         </Carousel>
//       </div>
//       <div className="col-6">
//         <div className="card p-0">
//           <div className="card-body pb-0">
//             <div>{carObj.price}</div>
//             <h5 className="card-title">{carObj.carModel}</h5>
//             <p className="card-text"> {carObj.seating}</p>
//           </div>
//           <div className="card-body">
//             <div>
//               <p className="card-text">< FontAwesomeIcon icon={ faCheck }/>Available from 13 February</p>

//               <h5>< FontAwesomeIcon icon={faDollarSign }/>2000/day</h5>
//             </div>
//             <div>
//               Bangalore
//               <button
//                 type="button"
//                 className="btn btn-primary "
//                 style={{ float: "right" }}
//                 onClick={() => navigate("/user/booknow")}
//               >
//                 Book Now

//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetail;
