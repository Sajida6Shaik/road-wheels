// import React from "react";
// import {
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Grid,
//   Box,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import Carousel from "react-material-ui-carousel";

// // Styled components for customization
// const Section = styled("section")({
//   padding: "1rem 0",
// });

// const TestimonialCard = styled(Card)({
//   marginBottom: "1rem",
// });

// const TestimonialImage = styled(CardMedia)({
//   height: "400px",
//   borderRadius: "50%", // Circle format
//   margin: "0 auto",
// });

// const Testimonials = () => {
//   const testimonials = [
//     {
//       image:
//         "https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg", // Replace with actual image URL
//       text: "I had a great experience with Road Wheels for my business trip. The car was perfect, and the customer service was top-notch. Will use again!",
//       author: "Sarah L.",
//     },

//     {
//       image:
//         "https://media.istockphoto.com/id/1626847905/photo/a-happy-businessman-looking-at-camera-while-working-on-his-computer.webp?b=1&s=170667a&w=0&k=20&c=ngkRyEArmiLyrWFvRPR0O-0E8rQ-HKq6tL09QmYaa44=", // Replace with actual image URL
//       text: "I had a great experience with Road Wheels for my business trip. The car was perfect, and the customer service was top-notch. Will use again!",
//       author: "JohnDoe K.",
//     },

//     {
//       image:
//         "https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?s=612x612&w=0&k=20&c=BM3E3osJBZSukhs98G6vn7HXe8QQTExGaymi2a61T3E=", // Replace with actual image URL
//       text: "Road Wheels made our vacation unforgettable. The booking process was seamless, and the vehicle was in pristine condition. Highly recommend!",
//       author: "Jennifer M.",
//     },

//     {
//       image:
//         "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg", // Replace with actual image URL
//       text: "Exceptional service! The staff was friendly, and the vehicle options were impressive. A hassle-free rental experience.",
//       author: "Ranveer J.",
//     },
//   ];

//   return (
//     <Container>
//       <Section>
//         <Typography variant="h5" paragraph align="center" sx={{ color: '#201E43' }}>
//           Hear from our satisfied customers about their experiences with Road
//           Wheels.Read what our clients have to say about their seamless booking
//           experiences and top-notch vehicle conditions.
//         </Typography>
//       </Section>

//       <Section>
//         <Carousel
//           autoPlay={true} // Enable autoplay
//           interval={5000} // Interval for each slide in milliseconds
//           indicators={true} // Display indicators
//           navButtonsAlwaysVisible={false} // Hide navigation buttons
//         >
//           {testimonials.map((testimonial, index) => (
//             <Grid container key={index} justifyContent="center">
//               <Grid item xs={12} md={8}>
//                 <TestimonialCard>
//                   <TestimonialImage
//                     component="img"
//                     image={testimonial.image}
//                     alt={`Customer ${index + 1}`}
//                   />
//                   <CardContent>
//                     <Typography variant="body1" paragraph>
//                       “{testimonial.text}”
//                     </Typography>
//                     <Typography variant="subtitle1" align="right">
//                       – {testimonial.author}
//                     </Typography>
//                   </CardContent>
//                 </TestimonialCard>
//               </Grid>
//             </Grid>
//           ))}
//         </Carousel>
//       </Section>
//     </Container>
//   );
// };

// export default Testimonials;
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
import Carousel from "react-material-ui-carousel";

// Styled components for customization
const Section = styled("section")({
  padding: "1rem 0",
});

const TestimonialCard = styled(Card)({
  marginBottom: "1rem",
});

const TestimonialImage = styled(CardMedia)({
  height: "400px",
  borderRadius: "50%", // Circle format
  margin: "0 auto",
});

const Testimonials = () => {
  const testimonials = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg", // Replace with actual image URL
      text: "I had a great experience with Road Wheels for my business trip. The car was perfect, and the customer service was top-notch. Will use again!",
      author: "Sarah L.",
    },

    {
      image:
        "https://media.istockphoto.com/id/1626847905/photo/a-happy-businessman-looking-at-camera-while-working-on-his-computer.webp?b=1&s=170667a&w=0&k=20&c=ngkRyEArmiLyrWFvRPR0O-0E8rQ-HKq6tL09QmYaa44=", // Replace with actual image URL
      text: "I had a great experience with Road Wheels for my business trip. The car was perfect, and the customer service was top-notch. Will use again!",
      author: "JohnDoe K.",
    },

    {
      image:
        "https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?s=612x612&w=0&k=20&c=BM3E3osJBZSukhs98G6vn7HXe8QQTExGaymi2a61T3E=", // Replace with actual image URL
      text: "Road Wheels made our vacation unforgettable. The booking process was seamless, and the vehicle was in pristine condition. Highly recommend!",
      author: "Jennifer M.",
    },

    {
      image:
        "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg", // Replace with actual image URL
      text: "Exceptional service! The staff was friendly, and the vehicle options were impressive. A hassle-free rental experience.",
      author: "Ranveer J.",
    },
  ];

  return (
    <Container>
      <Section>
        <Typography variant="h5" paragraph align="center" sx={{ color: '#8D493A' }}>
          Hear from our satisfied customers about their experiences with Road Wheels. Read what our clients have to say about their seamless booking experiences and top-notch vehicle conditions.
        </Typography>
      </Section>

      <Section>
        <Carousel
          autoPlay={true} // Enable autoplay
          interval={5000} // Interval for each slide in milliseconds
          indicators={true} // Display indicators
          navButtonsAlwaysVisible={false} // Hide navigation buttons
        >
          {testimonials.map((testimonial, index) => (
            <Grid container key={index} justifyContent="center">
              <Grid item xs={12} md={8}>
                <TestimonialCard>
                  <TestimonialImage
                    component="img"
                    image={testimonial.image}
                    alt={`Customer ${index + 1}`}
                  />
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      “{testimonial.text}”
                    </Typography>
                    <Typography variant="subtitle1" align="right">
                      – {testimonial.author}
                    </Typography>
                  </CardContent>
                </TestimonialCard>
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </Section>
    </Container>
  );
};

export default Testimonials;
