// src/components/CarCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUsers, faGasPump, faTachometerAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const CarCard = ({ car }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="140"
                image={car.image}
                alt={car.model}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {car.model}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: 8 }} />
                    <Typography variant="body2" color="textSecondary">
                        {car.seatings} Seats
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <FontAwesomeIcon icon={faGasPump} style={{ marginRight: 8 }} />
                    <Typography variant="body2" color="textSecondary">
                        {car.fuelType}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <FontAwesomeIcon icon={faTachometerAlt} style={{ marginRight: 8 }} />
                    <Typography variant="body2" color="textSecondary">
                        {car.mileage} km
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: 8 }} />
                    <Typography variant="body2" color="textSecondary">
                        ${car.price}
                    </Typography>
                </Box>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                <Button variant="contained" color="primary">
                    View Details
                </Button>
            </Box>
        </Card>
    );
};

export default CarCard;
