 
// // import React from 'react';
// // import Container from '@mui/material/Container';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import Grid from '@mui/material/Grid';
// // import { styled } from '@mui/material/styles';
// // import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

// // // Styled components for improved styling
// // const Section = styled(Box)({
// //   marginBottom: '1rem',
// // });

// // const AboutHeader = styled(Typography)({
// //   marginBottom: '1rem',
// //   fontWeight: 'bold',
// //   color: '#28a745', // Green color for headings
// // });

// // const AboutText = styled(Typography)({
// //   marginBottom: '1rem',
// //   color: '#000', // Black color for content text
// // });

// // const ListItem = styled(Box)({
// //   display: 'flex',
// //   alignItems: 'center',
// //   marginBottom: '0.5rem',
// //   color: '#000', // Black color for content text
// // });

// // const Icon = styled(CheckCircleIcon)({
// //   marginRight: '0.5rem',
// //   color: '#76c7c0', // Example color for icons
// // });

// // function About() {
// //   return (
// //     <Container maxWidth="lg" sx={{ paddingY: 4, backgroundColor: '#fff', color: '#000' }}>
// //       {/* About Us Section
// //       <Section>
// //         <AboutHeader variant="h4" component="h2">
// //           About Us
// //         </AboutHeader>
// //         <AboutText variant="body1">
// //           Road Wheels has been providing top-notch car rental services since 2020. Our mission is to offer reliable and affordable transportation solutions for all.
// //         </AboutText>
// //       </Section> */}

// //       {/* Welcome Message Section */}
// //       <Section>
// //         <AboutHeader variant="h4" component="h2">
// //           Welcome to Road Wheels!
// //         </AboutHeader>
// //         <AboutText variant="body1">
// //           At Road Wheels, we are dedicated to making your travel experience seamless and enjoyable. Our goal is to provide you with a diverse range of high-quality rental cars, ensuring you find the perfect vehicle for any journey.
// //         </AboutText>
// //       </Section>

// //       {/* Our Mission Section */}
// //       <Section>
// //         <AboutHeader variant="h4" component="h2">
// //           Our Mission
// //         </AboutHeader>
// //         <AboutText variant="body1">
// //           Our mission is to offer exceptional car rental services that prioritize customer satisfaction, reliability, and convenience. We strive to deliver an unparalleled experience, whether you’re renting a car for a business trip, a vacation, or a special occasion.
// //         </AboutText>
// //       </Section>

// //       {/* Our Vision Section */}
// //       <Section>
// //         <AboutHeader variant="h4" component="h2">
// //           Our Vision
// //         </AboutHeader>
// //         <AboutText variant="body1">
// //           We envision becoming the leading car rental service provider, renowned for our innovative solutions, customer-centric approach, and commitment to excellence. Our vision is to continually enhance our services to meet the evolving needs of travelers.
// //         </AboutText>
// //       </Section>

// //       {/* What Sets Us Apart Section */}
// //       <Section>
// //         <AboutHeader variant="h4" component="h2">
// //           What Sets Us Apart
// //         </AboutHeader>
// //         <Grid container spacing={2}>
// //           <Grid item xs={12} md={4}>
// //             <ListItem>
// //               <Icon />
// //               <Typography variant="body1">
// //                 <strong>A Diverse Fleet:</strong> From economy to luxury vehicles, we offer a wide selection to suit your needs and preferences.
// //               </Typography>
// //             </ListItem>
// //           </Grid>
// //           <Grid item xs={12} md={4}>
// //             <ListItem>
// //               <Icon />
// //               <Typography variant="body1">
// //                 <strong>Exceptional Customer Service:</strong> Our friendly and knowledgeable staff are here to assist you every step of the way.
// //               </Typography>
// //             </ListItem>
// //           </Grid>
// //           <Grid item xs={12} md={4}>
// //             <ListItem>
// //               <Icon />
// //               <Typography variant="body1">
// //                 <strong>Competitive Pricing:</strong> Enjoy great value with our transparent pricing and special offers.
// //               </Typography>
// //             </ListItem>
// //           </Grid>
// //         </Grid>
// //       </Section>

// //       {/* Our Values Section */}
// //       <Section>
// //         <AboutHeader variant="h4" component="h2">
// //           Our Values
// //         </AboutHeader>
// //         <Grid container spacing={2}>
// //           <Grid item xs={12} md={4}>
// //             <ListItem>
// //               <Icon />
// //               <Typography variant="body1">
// //                 <strong>Customer Satisfaction:</strong> We are committed to ensuring that every customer has a positive experience.
// //               </Typography>
// //             </ListItem>
// //           </Grid>
// //           <Grid item xs={12} md={4}>
// //             <ListItem>
// //               <Icon />
// //               <Typography variant="body1">
// //                 <strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.
// //               </Typography>
// //             </ListItem>
// //           </Grid>
// //           <Grid item xs={12} md={4}>
// //             <ListItem>
// //               <Icon />
// //               <Typography variant="body1">
// //                 <strong>Innovation:</strong> We continuously seek to improve and adapt our services to meet your needs.
// //               </Typography>
// //             </ListItem>
// //           </Grid>
// //         </Grid>
// //       </Section>
// //     </Container>
// //   );
// // }

// // export default About;


// import React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { styled } from '@mui/material/styles';
// import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

// // Styled components for improved styling
// const Section = styled(Box)({
//   marginBottom: '2rem',
// });

// const AboutHeader = styled(Typography)({
//   marginBottom: '1rem',
//   fontWeight: 'bold',
//   color: '#28a745', // Green color for headings
// });

// const AboutText = styled(Typography)({
//   color: '#000', // Black color for content text
// });

// const ListItem = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   marginBottom: '0.5rem',
//   color: '#000', // Black color for content text
// });

// const Icon = styled(CheckCircleIcon)({
//   marginRight: '0.5rem',
//   color: '#76c7c0', // Example color for icons
// });

// function About() {
//   return (
//     <Container maxWidth="lg" sx={{ paddingY: 4, backgroundColor: '#f8f9fa' }}>
//       {/* Welcome Message Section */}
//       <Section>
//         <Card >
//           <CardContent>
//             <AboutHeader variant="h4" component="h2">
//               Welcome to Road Wheels!
//             </AboutHeader>
//             <AboutText variant="body1" >
//               At Road Wheels, we are dedicated to making your travel experience seamless and enjoyable. Our goal is to provide you with a diverse range of high-quality rental cars, ensuring you find the perfect vehicle for any journey.
//             </AboutText>
//           </CardContent>
//         </Card>
//       </Section>

//       {/* Our Mission Section */}
//       <Section>
//         <Card>
//           <CardContent>
//             <AboutHeader variant="h4" component="h2">
//               Our Mission
//             </AboutHeader>
//             <AboutText variant="body1">
//               Our mission is to offer exceptional car rental services that prioritize customer satisfaction, reliability, and convenience. We strive to deliver an unparalleled experience, whether you’re renting a car for a business trip, a vacation, or a special occasion.
//             </AboutText>
//           </CardContent>
//         </Card>
//       </Section>

//       {/* Our Vision Section */}
//       <Section>
//         <Card>
//           <CardContent>
//             <AboutHeader variant="h4" component="h2">
//               Our Vision
//             </AboutHeader>
//             <AboutText variant="body1">
//               We envision becoming the leading car rental service provider, renowned for our innovative solutions, customer-centric approach, and commitment to excellence. Our vision is to continually enhance our services to meet the evolving needs of travelers.
//             </AboutText>
//           </CardContent>
//         </Card>
//       </Section>

//       {/* What Sets Us Apart Section */}
//       <Section>
//         <AboutHeader variant="h4" component="h2">
//           What Sets Us Apart
//         </AboutHeader>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <ListItem>
//                   <Icon />
//                   <Typography variant="body1">
//                     <strong>A Diverse Fleet:</strong> From economy to luxury vehicles, we offer a wide selection to suit your needs and preferences.
//                   </Typography>
//                 </ListItem>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <ListItem>
//                   <Icon />
//                   <Typography variant="body1">
//                     <strong>Exceptional Customer Service:</strong> Our friendly and knowledgeable staff are here to assist you every step of the way.
//                   </Typography>
//                 </ListItem>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <ListItem>
//                   <Icon />
//                   <Typography variant="body1">
//                     <strong>Competitive Pricing:</strong> Enjoy great value with our transparent pricing and special offers.
//                   </Typography>
//                 </ListItem>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Section>

//       {/* Our Values Section */}
//       <Section>
//         <AboutHeader variant="h4" component="h2">
//           Our Values
//         </AboutHeader>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <ListItem>
//                   <Icon />
//                   <Typography variant="body1">
//                     <strong>Customer Satisfaction:</strong> We are committed to ensuring that every customer has a positive experience.
//                   </Typography>
//                 </ListItem>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <ListItem>
//                   <Icon />
//                   <Typography variant="body1" >
//                     <strong>Integrity:</strong> We operate with honesty and transparency in all our dealings,supports local charities for future generations.
//                   </Typography>
//                 </ListItem>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <ListItem>
//                   <Icon />
//                   <Typography variant="body1">
//                     <strong>Innovation:</strong> We continuously seek to improve and adapt our services to meet your needs.
//                   </Typography>
//                 </ListItem>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Section>
//     </Container>
//   );
// }

// export default About;
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

// Styled components for improved styling
const Section = styled(Box)({
  marginBottom: '2rem',
});

const AboutHeader = styled(Typography)({
  marginBottom: '1rem',
  fontWeight: 'bold',
  color: '#28a745', // Green color for headings
});

const AboutText = styled(Typography)({
  color: '#000', // Black color for content text
});

const ListItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.5rem',
  color: '#000', // Black color for content text
});

const Icon = styled(CheckCircleIcon)({
  marginRight: '0.5rem',
  color: '#76c7c0', // Example color for icons
});

function About() {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 4, backgroundColor: '#f8f9fa' }}>
      {/* Welcome Message Section */}
      <Section>
        <Card sx={{ backgroundColor: '#F8EDED' }}>
          <CardContent>
            <AboutHeader variant="h4" component="h2">
              Welcome to Road Wheels!
            </AboutHeader>
            <AboutText variant="body1">
              At Road Wheels, we are dedicated to making your travel experience seamless and enjoyable. Our goal is to provide you with a diverse range of high-quality rental cars, ensuring you find the perfect vehicle for any journey.
            </AboutText>
          </CardContent>
        </Card>
      </Section>

      {/* Our Mission Section */}
      <Section>
        <Card sx={{ backgroundColor: '#F8EDED' }}>
          <CardContent>
            <AboutHeader variant="h4" component="h2">
              Our Mission
            </AboutHeader>
            <AboutText variant="body1">
              Our mission is to offer exceptional car rental services that prioritize customer satisfaction, reliability, and convenience. We strive to deliver an unparalleled experience, whether you’re renting a car for a business trip, a vacation, or a special occasion.
            </AboutText>
          </CardContent>
        </Card>
      </Section>

      {/* Our Vision Section */}
      <Section>
        <Card sx={{ backgroundColor: '#F8EDED' }}>
          <CardContent>
            <AboutHeader variant="h4" component="h2">
              Our Vision
            </AboutHeader>
            <AboutText variant="body1">
              We envision becoming the leading car rental service provider, renowned for our innovative solutions, customer-centric approach, and commitment to excellence. Our vision is to continually enhance our services to meet the evolving needs of travelers.
            </AboutText>
          </CardContent>
        </Card>
      </Section>

      {/* What Sets Us Apart Section */}
      <Section>
        <AboutHeader variant="h4" component="h2">
          What Sets Us Apart
        </AboutHeader>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#F8EDED' }}>
              <CardContent>
                <ListItem>
                  <Icon />
                  <Typography variant="body1">
                    <strong>A Diverse Fleet:</strong> From economy to luxury vehicles, we offer a wide selection to suit your needs and preferences.
                  </Typography>
                </ListItem>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#F8EDED' }}>
              <CardContent>
                <ListItem>
                  <Icon />
                  <Typography variant="body1">
                    <strong>Exceptional Customer Service:</strong> Our friendly and knowledgeable staff are here to assist you every step of the way.
                  </Typography>
                </ListItem>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#F8EDED' }}>
              <CardContent>
                <ListItem>
                  <Icon />
                  <Typography variant="body1">
                    <strong>Competitive Pricing:</strong> Enjoy great value with our transparent pricing and special offers.
                  </Typography>
                </ListItem>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      {/* Our Values Section */}
      <Section>
        <AboutHeader variant="h4" component="h2">
          Our Values
        </AboutHeader>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#F8EDED' }}>
              <CardContent>
                <ListItem>
                  <Icon />
                  <Typography variant="body1">
                    <strong>Customer Satisfaction:</strong> We are committed to ensuring that every customer has a positive experience.
                  </Typography>
                </ListItem>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#F8EDED' }}>
              <CardContent>
                <ListItem>
                  <Icon />
                  <Typography variant="body1">
                    <strong>Integrity:</strong> We operate with honesty and transparency in our dealings, supporting local charities for future generations.
                  </Typography>
                </ListItem>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#F8EDED' }}>
              <CardContent>
                <ListItem>
                  <Icon />
                  <Typography variant="body1">
                    <strong>Innovation:</strong> We continuously seek to improve and adapt our services to meet your needs.
                  </Typography>
                </ListItem>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
}

export default About;

