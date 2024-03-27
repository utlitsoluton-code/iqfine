import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <Box sx={{ background: "var(--color-dark)", color: "#fff", }}>
        <Container maxWidth="xl">
          <Grid container py={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton>
                </IconButton>
                <Typography variant='h5'> Our Services </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography component={Link} sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>React.js  </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>Mobile App Consultancy</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  React Native App Development
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  Software Quality Assurance
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  SEO Service
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  UI/UX Designing
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Wearable App Development
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>

                  Web Development
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton>
                </IconButton>
                <Typography variant='h5'>Industries We Serve</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Social Networking
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Real Estate
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Political
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  News App
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  E-Commerce
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Automobile
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Finance
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <NavigateNextIcon />
                </IconButton>
                <Typography sx={{ color: "#fff", '&:hover': { color: "var(--color-pink)" } }} className='cursor-pointer'>
                  Sports
                </Typography>
              </Stack>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                </IconButton>
                <Typography variant='h5'>Contact Information </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <PlaceIcon />
                </IconButton>
                <Typography>5th floor, tower1 ABC, Noida 135.</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <CallIcon />
                </IconButton>
                <Typography>+91 8527009243</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <CallIcon />
                </IconButton>
                <Typography>+91 9773623446</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton sx={{ color: "#fff" }}>
                  <EmailIcon />
                </IconButton>
                <Typography>info@utlsolution.com</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} sx={{ mt: 5 }} spacing={3}>
                <IconButton sx={{ color: "#fff" }} component={Link} to="https://www.facebook.com/profile.php?id=61552083501607" target="_blank">
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton sx={{ color: "#0a66c2" }} component={Link} to="https://www.linkedin.com/company/99323817/admin/feed/posts/" target="_blank">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton sx={{ color: "#c13584" }} component={Link} to="https://www.instagram.com/utlitsolution/" target="_blank">
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Stack>
            </Grid> */}
          </Grid>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19220.27723055946!2d77.39262161263215!3d28.49605858922948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce97cabbb91cf%3A0x414ecf5b1f65e37d!2sABC%20tower%20gate%20no%205!5e0!3m2!1sen!2sin!4v1709115510461!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <Box sx={{ py: 3 }}>

            <Stack>
              <Typography sx={{ textAlign: "center", color: "#fff", }} className='cursor-pointer'> All Rights Reserved.</Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
