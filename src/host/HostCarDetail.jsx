import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCheck } from "@fortawesome/free-solid-svg-icons";
import CarServices from "../services/CarServices";
import { faCar, faChair, faGasPump, faTachometerAlt, faMapMarkerAlt, faCalendarAlt, faSnowflake } from "@fortawesome/free-solid-svg-icons";


const HostCarDetail = () => {
  const [index, setIndex] = useState(0);
  const [carObj, setCarObj] = useState({
    // price: 50,
    // carModel: "Suzuki",
    // seating: 5,
    // AvailableDate: "13th February",
    // location: "Bangalore",
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
    CarServices.getAllCars()
      .then((response) => setCarObj(response.data))
      .catch((error) => console.error("Error in Fetching projects:", error));
  }, []);

  return (
    <div className="row m-3" >
      <div className="col-6">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((slide, i) => {
            return (
              <Carousel.Item key={i}>
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
      <div className="col-6">
        {/* <div className="card p-0"> */}
          {/* <div className="card-body pb-0"> */}
            {/* <div>{carObj.price}</div>
            <h5 className="card-title">{carObj.carModel}</h5>
            <p className="card-text"> {carObj.seating}</p> */}
          </div>
          {/* <div className="card-body"> */}
            <div>

{/* 
            <h5 className="card-title"> CAR MODEL: < FontAwesomeIcon icon={ faCar }/>MaruthiSuzukiBaleno{carObj.carModel}</h5>
        <p className="card-text"> < FontAwesomeIcon icon={ faChair }/>SEATINGS:7 {carObj.seating}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faGasPump }/>FUELTYPE: {carObj.fuelType}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faTachometerAlt }/>MILEAGE:{carObj.mileage}</p>
        <p className="card-text"> < FontAwesomeIcon icon={faSnowflake}/>CARTYPE: {carObj.carType}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faMapMarkerAlt }/>SOURCE LOCATION:{carObj.sourceLocation}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faMapMarkerAlt  }/>DESTINATION LOCATION:Kochi{carObj.destinationLocation}</p>
        <p className="card-text">< FontAwesomeIcon icon={faCalendarAlt}/>FROMDATE: {carObj.fromDate}</p>
        <p className="card-text"> < FontAwesomeIcon icon={ faCalendarAlt }/>TODATE: {carObj.toDate}</p>
        <h2 className="card-text"> < FontAwesomeIcon icon={faDollarSign }/>PRICE:{carObj.price}/hr</h2> */}

              
            </div>
            <div> </div>
          </div>
        // {/* </div> */}
      // </div>
    // </div>
  );
};

export default HostCarDetail;
