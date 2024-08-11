// src/components/CarList.js
import React from 'react';
import CarCard from './CarCard';
import { Grid } from '@mui/material';

const carData = [
    {
        model: 'Toyota Camry',
        image: 'https://images.template.net/wp-content/uploads/2016/04/27093503/Sky-Blue-Colored-Car-Wallpaper-for-Download.jpg',
        seatings: 5,
        fuelType: 'Gasoline',
        mileage: 30000,
        price: 25000
    },
    {
        model: 'Honda Civic',
        image: 'https://example.com/honda-civic.jpg',
        seatings: 5,
        fuelType: 'Gasoline',
        mileage: 15000,
        price: 20000
    }
    // Add more car objects here
];

const CarList = () => {
    return (
        <Grid container spacing={2}>
            {carData.map((car, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CarCard car={car} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CarList;
