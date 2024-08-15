// src/components/CarList.js
import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import {
  Box,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const carData = [
  {
    model: "Toyota Camry",
    image:
      "https://images.template.net/wp-content/uploads/2016/04/27093503/Sky-Blue-Colored-Car-Wallpaper-for-Download.jpg",
    seatings: 5,
    fuelType: "Gasoline",
    mileage: 30000,
    price: 25000,
  },
  {
    model: "Honda Civic",
    image: "https://example.com/honda-civic.jpg",
    seatings: 5,
    fuelType: "Gasoline",
    mileage: 15000,
    price: 20000,
  },
  // Add more car objects here
];

const CarList = ({ filteredCars }) => {
  const [cars, setCars] = useState(filteredCars);
  const [filtered, setFiltered] = useState([]);
  const [isAc, setIsAc] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("ROLE"));
    axios
      .get("http://localhost:9194/car/getallcars")
      .then((res) => {
        console.log(res);
        if (!filteredCars) {
          setCars(res.data);
          setFiltered(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setIsAc(event.target.value);
    const filtered = cars.filter((car) => car.carType === event.target.value);
    console.log(filtered);
    setFiltered(filtered);
  };

  return (
    <Paper elevation={5}>
      <Box>
        {role && (
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={isAc}
              onChange={handleChange}
            >
              <FormControlLabel value="AC" control={<Radio />} label="AC" />
              <FormControlLabel
                value="NON-AC"
                control={<Radio />}
                label="Non-AC"
              />
            </RadioGroup>
          </FormControl>
        )}
      </Box>
      <Box
        p={3}
        className=""
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {filtered?.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </Box>
    </Paper>
  );
};

export default CarList;
