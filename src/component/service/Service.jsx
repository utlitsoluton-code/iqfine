import React, { useEffect } from 'react'
import "./service.css"
import { Box, Button, Container, Divider, Grid, IconButton, Modal, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import bannerService from "../../assets/banner/bannerService.png"
import 'aos/dist/aos.css';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from '../ContactForm/ContactForm'
import { servicesContent } from '../../assets/icons/iconsWeb';
export default function Service() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const closeIconComponent = (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
  return (
    <>
      <Box sx={{ background: "var(--color-blue)" }}>
        <Container sx={{ py: 5 }}>
          <Typography color={"#fff"} fontWeight={"bold"} variant='h3' textAlign={"center"}>Our Services</Typography>
          <Grid container >
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{
              display: {
                xs: 'inline-block',
                md: 'none',
              },
            }}
              data-aos="fade-up">
              <Box sx={{ justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }}>
                <img src={bannerService} alt="" />
              </Box>
            </Grid>
            <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{ color: "white" }} >
              <Typography sx={{ mt: 2,}} className='font-style'>
                At UTL IT Solutions, we offer a range of services to cater to your digital needs. Whether you need a website, mobile app, or graphic design, we've got you covered. Our skilled team specializes in Web Development, IOS App Development, Android App Development, Graphic Designing, UI/UX Design, SEO, and Digital Marketing.    </Typography>
              <Button variant="contained" sx={{
                mt: 3,
                p: 1,
                background: "var(--color-white)",
                fontWeight: "bold",
                textTransform: 'capitalize',
                borderColor: 'var(--color-pink)',
                color: 'var(--color-pink)',
                borderRadius: "30px",
                '&:hover': {
                  borderColor: 'var(--color-pink)',
                  color: 'var(--color-pink)',
                  background: "#fff",
                },
              }}
                onClick={handleOpen}>Quick Contact</Button>
            </Grid>
            <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              display: {
                xs: 'none',
                md: 'inline-block',
              }
            }}>
              <img src={bannerService} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ my: 5, p: 5, }}>
        <Grid container spacing={2}>
          {servicesContent.map((item, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <>
                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box sx={{ justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }} data-aos="fade-up">
                      <img src={item.icon} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9} lg={9} xl={9} data-aos="fade-down">
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "var(--color-dark2)" ,textAlign:"justify"}}>{item.description}</Typography>
                    <Box mt={2}>
                      <Button
                        variant="contained"
                        sx={{
                          background: "var(--color-pink)",
                          borderRadius: '20px',
                          fontWeight: "bold",
                          textTransform: 'capitalize',
                          borderColor: 'var(--color-pink)',
                          color: '#fff',
                          '&:hover': {
                            borderColor: 'var(--color-pink)',
                            color: 'var(--color-blue)',
                            background: "none"
                          },
                        }}
                        component={Link}
                        to={item.path}
                        onClick={handleScrollToTop}
                      >
                        Read More...
                      </Button>
                    </Box>
                    <Divider
                      sx={{
                        mt: 2,
                        border: '1px dotted var(--color-pink)',
                      }}
                    />
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{
                    display: {
                      xs: 'inline-block',
                      md: 'none',
                    },
                  }}
                    data-aos="fade-up">
                    <Box sx={{ justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }}>
                      <img src={item.icon} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9} lg={9} xl={9} data-aos="fade-up">
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "var(--color-dark2)" ,textAlign:"justify"}}>{item.description}</Typography>
                    <Box mt={2}>
                      <Button variant="contained" sx={{ background: "var(--color-blue)", borderRadius: '20px', fontWeight: "bold", textTransform: 'capitalize', borderColor: 'var(--color-pink)', color: '#fff', '&:hover': { borderColor: 'var(--color-blue)', color: 'var(--color-pink)', background: "none" }, }} component={Link} to={item.path} onClick={handleScrollToTop} >
                        Read More...
                      </Button>
                    </Box>
                    <Divider sx={{ mt: 2, border: '1px dotted var(--color-blue)', }} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{
                    display: {xs: 'none',md: 'inline-block',},}} data-aos="fade-down">
                    <Box sx={{ justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }}>
                      <img src={item.icon} alt="" />
                    </Box>
                  </Grid>
                </>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Container>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: "10px", width: '90%', maxWidth: '600px', }}>
          <Container>
            <ContactForm closeIcon={closeIconComponent} />
          </Container>
        </div>
      </Modal>
    </>
  )
}
