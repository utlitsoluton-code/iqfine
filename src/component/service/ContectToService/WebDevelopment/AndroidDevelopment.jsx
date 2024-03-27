import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ContactForm from '../../../ContactForm/ContactForm'
import WorkChart from '../../workChart/WorkChart'
import android from "../../../../assets/android.webp"
import process from "../../../../assets/ourprocess.png"
export default function AndroidDevelopment() {
    return (
        <>
            <Box sx={{ background: "var(--color-blue)", py: 3 }}>
                <Container maxWidth="xl" >
                    <Box maxWidth="xl" sx={{
                        background: "rgba(209, 222, 234, 0.5)",
                        p: 3,
                        borderRadius: "20px",
                        border: "2px solid #fff"
                    }}>
                        <Typography sx={{ justifyContent: "center", textAlign: "center", mb: 3, fontWeight: "bold" }} variant='h4'>Android App Development Company </Typography>
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

            <Box className="main" >
                <Container maxWidth="xl" sx={{ py: 5 }}>
                    <Box maxWidth="xl" sx={{ background: "rgba(209, 222, 234, 0.5)", p: 3, borderRadius: "20px", border: "2px solid #fff" }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
                            Android App Development Company
                        </Typography>

                        <Grid container>
                            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <Typography sx={{ color: "var(--color-dark)",textAlign: 'justify', }} className='font-style'>Nowadays, everyone is a smartphone user and needs everything on fingertips. If we talk about the operating system that is mostly used in smartphones is iOS and Android. As a comparison to iOS, Android has more users. The choice made by many users regarding operating system users prefers Android first. This leads to the demand for both either smartphone or mobile applications. If we see in the mobile application market, there is an enormous number of companies that have either already launched their application or planning to launch. So what are you waiting for, we UTL IT Solution, building innovative applications, are the best android app consultant company located . We provide you world-class, value-added, innovative, and cost-effective services to our client's business need. Our company's IT experts will help you to make your idea unique.</Typography>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <Box className="swing-up-down">
                                    <img src={android} alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box maxWidth="xl" sx={{ background: "rgba(209, 222, 234, 0.5)", p: 3, borderRadius: "20px", border: "2px solid #fff", my: 5 }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold", textAlign: "center" }}>
                            Our Process
                        </Typography>
                        <Box>
                            <img src={process} alt="" />
                        </Box>
                    </Box>
                    <Box maxWidth="xl" sx={{ background: "rgba(209, 222, 234, 0.5)", p: 3, borderRadius: "20px", border: "2px solid #fff", my: 5 }}>
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
                    </Box>
                </Container>
            </Box >


        </>
    )
}
