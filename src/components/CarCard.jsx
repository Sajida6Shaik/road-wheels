import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Tooltip,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faGasPump,
  faTachometerAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CarCard = ({ car }) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("JWT");
    setToken(token);
  }, []);

  const handleViewDetails = (carId) => {
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/cardetails/${carId}`);
    }
  };

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={!token ? "/login" : `/cardetails/${car.carId}`}
    >
      <Card
        sx={{
          width: 335,
          margin: 2,
          boxShadow: 5,
          borderRadius: 3,
          overflow: "hidden",
          transition: "transform 0.1s",
          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image="https://images.template.net/wp-content/uploads/2016/04/27093503/Sky-Blue-Colored-Car-Wallpaper-for-Download.jpg"
          alt={car.carModel}
          sx={{
            filter: "brightness(85%)",
            transition: "filter 0.3s",
            "&:hover": {
              filter: "brightness(100%)",
            },
          }}
        />
        <CardContent sx={{ padding: 3 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            {car.carModel}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Tooltip title="Seating Capacity">
              <Chip
                icon={<AirlineSeatReclineNormalIcon />}
                label={`${car.seating} Seats`}
                variant="outlined"
                sx={{ fontSize: "0.9rem" }}
              />
            </Tooltip>
            <Tooltip title="Fuel Type">
              <Chip
                icon={<LocalGasStationIcon />}
                label={car.fuelType}
                variant="outlined"
                sx={{ fontSize: "0.9rem" }}
              />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Tooltip title="Mileage">
              <Chip
                icon={<SpeedIcon />}
                label={`${car.mileage} km`}
                variant="outlined"
                sx={{ fontSize: "0.9rem" }}
              />
            </Tooltip>
            <Tooltip title="Price">
              <Chip
                icon={<CurrencyRupeeIcon />}
                label={`${car.price}`}
                variant="outlined"
                sx={{ fontSize: "0.9rem" }}
              />
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CarCard;
