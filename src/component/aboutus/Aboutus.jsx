import { Box, Button, Container, Grid, Stack, Typography, Modal, IconButton, Avatar } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from '../ContactForm/ContactForm';
import aboutUs from "../../assets/banner/aboutUs.png"
import about from "../../assets/about.svg"
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import process from "../../assets/ourprocess.png"
import Carousel from 'react-material-ui-carousel';
const IconMap = {
  'Happy Clients': <PeopleIcon fontSize="large" />,
  'Projects': <WorkIcon fontSize="large" />,
  'Who Are We': <AccountCircleIcon fontSize="large" />,
  'Our Mission': <StarIcon fontSize="large" />,
};
const ContentCard = ({ title, content }) => (
  <Box >
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        {IconMap[title]}
        <Typography variant="h5" fontWeight={600} >
          {title}
        </Typography>
      </Box>
      <Typography sx={{ color: "var(--color-dark2)", mt: 2,textAlign: 'justify', }} >
        {content}
      </Typography>
    </Box>
  </Box>
);
export default function Aboutus() {
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
  const cardContents = [
    {
      title: 'Happy Clients',
      content: 'UtlitSolution has been privileged to serve a diverse and satisfied client base. Our clients come from various industries, and we take pride in delivering high-quality solutions that meet their unique needs.',
    },
    {
      title: 'Projects',
      content: 'UtlitSolution has successfully executed a wide range of projects across different domains. Our team is dedicated to delivering innovative and effective solutions that exceed client expectations.',
    },
    {
      title: 'Who Are We',
      content: 'UtlitSolution is a dynamic and forward-thinking company specializing in providing cutting-edge solutions for businesses. Our team consists of experienced professionals who are passionate about delivering excellence in technology and innovation.',
    },
    {
      title: 'Our Mission',
      content: ` UtlitSolution's mission is to empower businesses with transformative technologies. We are committed to delivering innovative solutions that drive growth, enhance efficiency, and make a positive impact on our clients and the communities we serve.`,
    },
  ];
  const items = [
    {
      name: "Aarav Rajput ",
      testimonial: "UTL IT SOLUTION provided an outstanding web design service. The team focused on creating a user-friendly interface that perfectly suits my business needs. The site looks professional, loads quickly, and is easy to navigate. ",
    },
    {
      name: "Arjun Singh",
      testimonial: "I needed a website for my startup, and UTL IT SOLUTION Web Developers delivered exactly what I wanted within the promised timeframe. The entire process was smooth, and their attention to detail was impressive. I appreciate their efficiency",
    },
    {
      name: "Bhavesh Rawal ",
      testimonial: "UTL IT SOLUTION brought a creative touch to my website. The design is not only visually appealing but also functional. They incorporated innovative features that set my site apart. Kudos to the team for their fresh and modern approach",
    },
  ];
  return (
    <>
      <Box sx={{ background: "var(--color-blue)" }}>
        <Container sx={{ py: 5 }}>
          <Typography color={"#fff"} fontWeight={"bold"} variant='h3' textAlign={"center"}>About Us</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{
              display: { xs: 'inline-block', md: 'none', },
            }} data-aos="fade-up">
              <Box sx={{ justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }}>
                <img src={aboutUs} alt="" />
              </Box>
            </Grid>
            <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{ color: "white", }} >
              <Typography sx={{ mt: 2, textAlign: 'justify', }} className='font-style'>Welcome to UTL IT SOLUTION, where technology meets innovation! With a Successful track record of three years in the dynamic realm of Information Technology. Since then, we have been committed to delivering excellence and value through our services. Our team comprises passionate tech enthusiasts and experts who thrive on challenges. From designing user-friendly websites to developing robust software solutions and offering unparalleled IT support. We invite you to explore our services and embark on a transformative journey with us. We believe in forging strong relationships by listening attentively to our clients' needs and providing tailored solutions that exceed expectations. </Typography>
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
            <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', display: { xs: 'none', md: 'inline-block', } }}>
              <img src={aboutUs} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ py: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Boost your productivity</Typography>
              <Typography sx={{ color: "var(--color-dark2)" ,textAlign: 'justify',}}>Efficiency is key to success. Our cutting-edge tools are designed to help you achieve your goals, just like Batman's bat-tools help him save Gotham City.
                There's no magic, just the right tools for the job. It's time to upgrade to the tools you deserve.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Box>
              <img src={about} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box >
        <Container sx={{ py: 5 }}>
          <Grid container spacing={3}>
            {cardContents.map((card, index) => (
              <Grid item key={index} xs={12} sm={12} md={3} lg={3} xl={3} >
                <ContentCard title={card.title} content={card.content} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "var(--color-blue)", py: 3 }}>
        <Container maxWidth="xl">
          <Typography variant='h5' sx={{ fontWeight: "bold", textAlign: "center" }}>
            Our Process
          </Typography>
          <Box>
            <img src={process} alt="" />
          </Box>
        </Container>
      </Box>
      <Box >
        <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", py: 3 }}>
          <Typography variant='h3' fontWeight={"bold"}>Testimonials</Typography>
        </Box>
        <Container data-aos="fade-up">
          <Box sx={{ width: "100%", marginX: "auto" }}>
            <Carousel autoPlay={true} animation="slide" indicators={true}
              // navButtonsAlwaysVisible={true}
              cycleNavigation={true}>
              {items.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 2 }}>
                  <Box>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", }}>
                        <Avatar sx={{ width: 100, height: 100, fontSize: 40 }}>
                          {item.avatar}
                        </Avatar>
                      </Box>
                      <Typography variant='h3' sx={{ textAlign: "center", m: 2 }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{ fontSize: "18px", }} className='font-style'>
                        {item.testimonial}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Container>
      </Box>
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
