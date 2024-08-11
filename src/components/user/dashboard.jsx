import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CarList from "../../common-components/carlist";
import CarServices from "../../services/CarServices";
const Dashboard = () => {
  const [carData, setCarData] = useState([
    // {
    //   price: 50,
    //   carModel: 'Suzuki',
    //   seating: 5,
    //   AvailableDate: '13th Frebruary',
    //   location: 'Bangalore'
    //   },
    //   {
    //     price: 50,
    //     carModel: 'Suzuki',
    //     seating: 5,
    //     AvailableDate: '13th Frebruary',
    //     location: 'Bangalore'
    //     },
    //     {
    //       price: 50,
    //       carModel: 'Suzuki',
    //       seating: 5,
    //       AvailableDate: '13th Frebruary',
    //       location: 'Bangalore'
    //       },
    //       {
    //         price: 50,
    //         carModel: 'Suzuki',
    //         seating: 5,
    //         AvailableDate: '13th Frebruary',
    //         location: 'Bangalore'
    //         }
    //         ,{
    //           price: 50,
    //           carModel: 'Suzuki',
    //           seating: 5,
    //           AvailableDate: '13th Frebruary',
    //           location: 'hyderabad',
    //           availability: true
    //           }
    //           ,{
    //             price: 50,
    //             carModel: 'Suzuki',
    //             seating: 5,
    //             AvailableDate: '13th Frebruary',
    //             location: 'Bangalore',
                
    //             availability: true
    //             }
    //             ,{
    //               price: 50,
    //               carModel: 'Suzuki',
    //               seating: 5,
    //               AvailableDate: '13th Frebruary',
    //               location: 'Bangalore',
    //               availability: false
    //               }
  ]);

  useEffect(() => {
     
    CarServices.getAllCars()
      .then((response) => setCarData(response.data))
      .catch((error) => console.error("Error in Fetching projects:", error));
  }, []);

  return (
    <div className=" ">
      <div className="row row-cols-4 m-3 gy-3 ">
        
        {carData.map((item, index) => (
          <div className="col-3">
          <CarList carObj={item} index={index}></CarList>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Dashboard;
