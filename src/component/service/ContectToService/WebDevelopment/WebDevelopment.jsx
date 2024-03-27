import { Box, Card, CardContent, Container, Grid, Typography, } from '@mui/material'
import React from 'react'
import ContactForm from '../../../ContactForm/ContactForm'
import process from "../../../../assets/ourprocess.png"
import s1 from "../../../../assets/s1.jpg"
import WorkChart from '../../workChart/WorkChart';
import "./web.css"
import { iconsWeb } from '../../../../assets/icons/iconsWeb'
export default function WebDevelopment() {
    return (
        <>
            <Box sx={{ background: "var(--color-blue)", py: 3 }}>
                <Container maxWidth="xl">
                    <Box maxWidth="xl" sx={{
                        background: "rgba(209, 222, 234, 0.5)",
                        p: 3,
                        borderRadius: "20px",
                        border: "2px solid #fff"}}>
                        <Typography sx={{ justifyContent: "center", textAlign: "center", mb: 3, fontWeight: "bold" }} variant='h4'>Web & App Development </Typography>
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <WorkChart />
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <ContactForm />
                            </Grid>
                        </Grid>
                    </Box >
                </Container>
            </Box>
            <Container sx={{ py: 3 }} maxWidth="xl">
                <Typography variant='h5' sx={{ fontWeight: "bold", textAlign: "center" }}>
                    Top Mobile App & web Development Company
                </Typography>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={12} lg={6} md={6} xl={6}>
                        <Box className="swing-up-down">
                            <img src={s1} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} xl={6}>
                        <Typography sx={{ color: "var(--color-dark)" }} className='font-style'>
                            Creating awesome apps needs money to move beyond just an idea. UTL IT SOLUTION is a top mobile app development company that makes cool apps. They're really good at it and have a fantastic team of designers and developers. They're known as one of the best app development companies.
                            UTL IT SOLUTION is all about providing IT services for making websites and mobile apps. They do everything from coming up with ideas to designing, programming, and finally putting the app out there. They make sure the software they create is top-notch and satisfies their clients.
                            In the world of technology, it's important to be adaptable, and that's exactly what UTL IT SOLUTION does. They keep up with the latest trends, understand the market, and help you get what you really want. They're passionate about making software that looks great and works well.
                            Their focus is on long-term relationships rather than quick wins. They want to help every business succeed digitally and become a reliable partner globally. UTL IT SOLUTION is known as one of the best mobile app development companies around the world, and they work with big companies, startups, and small businesses.
                            They're experts at using technology to create digital solutions for mobile apps, websites, and online apps. They believe in creating software that not only looks good but also works well. They use the latest technologies to ensure that users have a great experience with the apps they create.
                            Their team is skilled at solving problems and increasing productivity for their partners.
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
            <Box sx={{ py: 3 }} className="main">
                <Container maxWidth="xl" >
                    <Box maxWidth="xl" sx={{
                        background: "rgba(209, 222, 234, 0.5)",
                        p: 3,
                        borderRadius: "20px",
                        border: "2px solid #fff"
                    }}>
                        <Box >
                            <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", mb: 2 }}>
                                <Typography variant='h5' sx={{ fontWeight: "bold", textAlign: "center" }}>
                                    Technologies on we work
                                </Typography>
                            </Box>
                            <Grid container spacing={2}>
                                {iconsWeb.map((item, index) => (
                                    <Grid item key={index} sm={12} xs={12} md={3} lg={3} xl={3}>
                                        <Card
                                            sx={{
                                                transition: 'var(--transition)',
                                                color: "var(--color-dark)",
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                borderRadius: "20px",
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
            <Box sx={{ background: "var(--color-teal)", py: 3 }}>
                <Container maxWidth="xl">
                    <Typography variant='h5' sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
                        Let's Talk
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                            <ContactForm />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                            <WorkChart />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
