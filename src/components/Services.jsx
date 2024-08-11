
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for customization
const Section = styled('section')({
  padding: '1rem 0',
});

const Heading = styled(Typography)({
  marginBottom: '1rem',
  fontWeight: 'bold',
  color: '#28a745', 
});

const CustomCard = styled(Card)({
  backgroundColor: '#D1E9F6',
});

const CardHeading = styled(Typography)({
  color: '#A02334',
});

const Services = () => {
  return (
    <Container>
      <Section>
        <Typography variant="h5" paragraph align="center" sx={{ color: '#8D493A' }}>
          At Road Wheels,We offer a range of services designed to make your car rental experience convenient and enjoyable.
        </Typography>
      </Section>

      <Section>
        <Heading variant="h4" gutterBottom>
          Car Rental Options
        </Heading>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardActionArea>
                <CardContent>
                  <CardHeading variant="h6">Economy Cars</CardHeading>
                  <Typography variant="body2">
                    Affordable and fuel-efficient, perfect for city driving and short trips.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardActionArea>
                <CardContent>
                  <CardHeading variant="h6">Luxury Cars</CardHeading>
                  <Typography variant="body2">
                    Experience premium comfort and style with our range of luxury vehicles.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
              <CardActionArea>
                <CardContent>
                  <CardHeading variant="h6">SUVs</CardHeading>
                  <Typography variant="body2">
                    Spacious and powerful, ideal for families and off-road adventures.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </CustomCard>
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Heading variant="h4" gutterBottom>
          Customer Support
        </Heading>
        <CustomCard>
          <CardContent>
            <CardHeading variant="h6">Support Services</CardHeading>
            <Typography variant="body1" paragraph>
              Our customer support team is available 24/7 to assist you with any questions or issues. Contact us via phone, email, or live chat.
            </Typography>
          </CardContent>
        </CustomCard>
      </Section>

      <Section>
        <Heading variant="h4" gutterBottom>
          Sustainability Initiatives
        </Heading>
        <CustomCard>
          <CardContent>
            <CardHeading variant="h6">Green Practices</CardHeading>
            <Typography variant="body1" paragraph>
              Explore our eco-friendly vehicle options and learn about our commitment to sustainability and green practices.
            </Typography>
          </CardContent>
        </CustomCard>
      </Section>
    </Container>
  );
};

export default Services;


