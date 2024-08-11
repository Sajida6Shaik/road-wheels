import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { MailOutline, LocationOn, Comment } from "@mui/icons-material";

// Styled components for customization
const Section = styled("section")({
  padding: "2rem 0",
});

const ContactCard = styled(Card)({
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
  backgroundColor: "#EEEEEE",
});

const ContactUs = () => {
  return (
    <Container>
      <Section>
        <Typography variant="h2" gutterBottom align="center" sx={{ color: '#28a745' }}>
        Let’s Connect and Make Magic Happen!
        </Typography>
        <Typography variant="h5" paragraph align="center" sx={{ color: '#8D493A' }} >
          We’d love to hear from you! Reach out to us with any questions or
          feedback.
        </Typography>
      </Section>

      <Section>
        <ContactCard>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ color: '#28a745' }}>
              Get in Touch
            </Typography>
            <Box mb={2}>
              <Typography variant="body1" paragraph>
                <MailOutline fontSize="small" /> <strong>Email:</strong>{" "}
                <a href="mailto:roadwheels@gmail.com">roadwheels@gmail.com</a>
              </Typography>
              <Typography variant="body1" paragraph>
                <LocationOn fontSize="small" /> <strong>Address:</strong> 123
                Roadway Lane, Car City, CA 90210
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              For support or inquiries, please contact us via email. We strive
              to respond to all messages within 24 hours.
            </Typography>
          </CardContent>
        </ContactCard>
      </Section>
    </Container>
  );
};

export default ContactUs;
