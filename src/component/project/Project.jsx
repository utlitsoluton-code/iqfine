import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import React from 'react'
import bg3 from "../../assets/bg3.jpg"
import Carousel from 'react-material-ui-carousel';
import kw1 from "../../assets/kw1.jpg"
import kw2 from "../../assets/kw2.jpg"
import kw3 from "../../assets/kw3.jpg"
import kw4 from "../../assets/kw4.jpg"
const items = [
    {
      images: [kw1, kw2],
      caption: ['Noida', "Delhi"],
    },
    {
      images: [kw3, kw4],
      caption: ["Punjab", "Dubai"],
    },
    {
      images: [kw1, kw2],
      caption: ['Gurgao', "America"],
    },
    {
      images: [kw3, kw4],
      caption: ['Goa', "Banglour"],
    },
   
  ];
export default function Project() {
    const containerStyle = {
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        position: 'relative',
    };
    return (
        <>
            <section id='project'>
                <Stack sx={containerStyle}>
                    <Container sx={{ my: 5, textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "36px", color: "black", fontWeight: 600 }}>Our Other Projects</Typography>
                        <Box my={5}>
                        <Carousel 
                            autoPlay={true}
                            animation="slide"
                            indicators={true}
                            navButtonsAlwaysVisible={true}
                            cycleNavigation={true}
                        >
                            {items.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: 2, }}>
                                    {item.images.map((image, subIndex) => (
                                        <Box key={subIndex} sx={{ flex: 1, }}>
                                            <Paper sx={{p:1, borderRadius:"15px"}}>
                                                <img
                                                    src={image}
                                                    alt={`Slide ${index + 1}, Column ${subIndex + 1}`}
                                                    style={{ width: '100%', height: '300px', objectFit: 'cover' , borderRadius:"15px"}}/>
                                            </Paper>
                                            <Box my={1}>
                                            <Typography sx={{fontSize:"23px", fontWeight:"bold", color:"black"}}>  {item.caption[subIndex]}</Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            ))}
                        </Carousel>
                        </Box>
                    </Container>
                </Stack>
            </section>
        </>
    )
}
