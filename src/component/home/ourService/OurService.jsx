import React, { useEffect } from 'react'
import { iconsWeb } from '../../../assets/icons/iconsWeb'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
export default function OurService() {
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <Container maxWidth="xl" >
                <Box maxWidth="xl" sx={{
                    background: "var(--color-light)",
                    p: 3,
                    borderRadius: "20px",
                    border: "2px solid #fff"
                }}>
                    <Box >
                        <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", py: 2, textAlign: "center" }}>
                            <Typography variant='h3' fontWeight={"bold"}>Our Services</Typography>
                        </Box>
                        <Grid container spacing={2}>
                            {iconsWeb.map((item, index) => (
                                <Grid item key={index} sm={12} xs={12} md={3} lg={3} xl={3}>
                                    <Card component={Link} to={item.location} data-aos="fade-up" onClick={handleScrollToTop}
                                        sx={{
                                            transition: 'var(--transition)',
                                            color: "var(--color-dark)",
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            borderRadius: "20px",
                                            cursor: "pointer",
                                            '&:hover': {
                                                cursor: "pointer",
                                                background: "var(--color-blue)",
                                                color: "#fff",
                                            },
                                        }}>
                                        <CardContent>
                                            <img src={item.icon} alt="" style={{ margin: 'auto', transition: 'transform var(--transition)' }} />
                                            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 600 }}>
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box >
            </Container>
        </>
    )
}
