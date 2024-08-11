// import React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Slider from 'react-slick';
// import { styled } from '@mui/material/styles';

// // Import local images
// import car1 from '../assests/car1.jpg.jpg';
// import car2 from '../assests/car2.jpg.jpg';
// import car3 from '../assests/car3.jpg.jpg';

// // Styled components
// const CarouselImage = styled('img')({
//   width: '100vw', // Full viewport width
//   height: '100vh', // Full viewport height
//   objectFit: 'cover',
// });
 

// function Home() {
//   // Carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,       // Enable autoplay
//     autoplaySpeed: 3000,  // Set autoplay speed (in milliseconds)
//   };

//   return (
//     <Container disableGutters>
//       {/* Carousel Section */}
//       <Box my={0} id="home" sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
//         <Slider {...settings}>
//           <CarouselImage src={car1} alt="Car 1" />
//           <CarouselImage src={car2} alt="Car 2" />
//           <CarouselImage src={car3} alt="Car 3" />
//         </Slider>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             textAlign: 'center',
//             color: 'white',
//             zIndex: 1,
//           }}
//         >
//           <Typography variant="h3" component="h1" gutterBottom>
//             Welcome to Road Wheels
//           </Typography>
//           <Typography variant="h5">
//             Explore our wide range of vehicles
//           </Typography>
//         </Box>
//       </Box>

   
//     </Container>
//   );
// }

// export default Home;
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';
import { Card, CardContent, TextField, Button, MenuItem, InputLabel, FormControl } from '@mui/material';

// Import local images
import car1 from '../assests/car1.jpg.jpg';
import car2 from '../assests/car2.jpg.jpg';
import car3 from '../assests/car3.jpg.jpg';

// Styled components
const CarouselImage = styled('img')({
  width: '100vw', // Full viewport width
  height: '100vh', // Full viewport height
  objectFit: 'cover',
});

const FindCarCard = styled(Card)({
  maxWidth: 400,
  position: 'absolute',
  top: '20%',
  right: '5%',
  zIndex: 1,
});

function Home() {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,  // Set autoplay speed (in milliseconds)
  };

  // Sample data for dropdowns
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  const handleSearch = () => {
    // Handle the search button click
    console.log('Search clicked');
  };

  return (
    <Container disableGutters>
      {/* Carousel Section */}
      <Box my={0} id="home" sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <Slider {...settings}>
          <CarouselImage src={car1} alt="Car 1" />
          <CarouselImage src={car2} alt="Car 2" />
          <CarouselImage src={car3} alt="Car 3" />
        </Slider>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 1,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Road Wheels
          </Typography>
          <Typography variant="h5">
            Explore our wide range of vehicles
          </Typography>
        </Box>

        {/* Find Your Car Card */}
        <FindCarCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Find Your Car
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>From Date</InputLabel>
                <TextField
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>To Date</InputLabel>
                <TextField
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Source Location</InputLabel>
                <TextField
                  select
                  label="Source Location"
                >
                  {locations.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Destination Location</InputLabel>
                <TextField
                  select
                  label="Destination Location"
                >
                  {locations.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <Button variant="contained" color="primary" onClick={handleSearch}>
                Find Your Car
              </Button>
            </Box>
          </CardContent>
        </FindCarCard>
      </Box>
    </Container>
  );
}

export default Home;
