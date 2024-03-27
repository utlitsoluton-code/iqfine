import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import WorkChart from '../../workChart/WorkChart'
import ContactForm from '../../../ContactForm/ContactForm'
import iphone from "../../../../assets/iphone.webp"
import iphone2 from "../../../../assets/iphone2.jpeg"
import process from "../../../../assets/ourprocess.png"
import "./web.css"

export default function IosAppDevelopment() {
    return (
        <>
            <Box sx={{ backgroundColor: "var(--color-blue)", py: 5, }}>
                <Container maxWidth="xl" sx={{
                    background: "var(--color-light)", py: 3, borderRadius: "20px",
                    border: "2px solid #fff"
                }}>
                    <Typography sx={{ justifyContent: "center", textAlign: "center", mb: 3, fontWeight: "bold" }} variant='h4'>IOS App Development </Typography>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                            <WorkChart />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ py: 5, }}>
                <Container maxWidth="xl">
                    <Typography sx={{ justifyContent: "center", textAlign: "center", mb: 3, fontWeight: "bold" }} variant='h4'>iOS App Development Company </Typography>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                            <Typography sx={{ color: "var(--color-dark)", }}>There is no operating system more premium and niche than Apple’s iOS software. It is the most secure and reliable operating system.

                                Some interesting facts about iOS are it covers 14% market in the world and 50% in America, Australia, etc Countries iOS is the fastest-growing operations system. And Apple’s App Store with 2.2 million available apps continued the second-largest app store

                                iOS is called iPhone Operating System, which is Apple’s mobile OS that runs on all iPhone devices either it is iPhone, iPad, or iPod. Like Android, Apple also renders tools and resources for iOS app development. We UTL IT Solution, the best iOS app development company.

                                As a leading iOS app developer, we develop iOS apps in native languages such as Objective-C, Swift, cross-platform native applications by using Xamarin (C# & F#) or React Native (JavaScript).

                                iOS app development company providing services that cover the entire development cycle, from concept to distribution. We deliver the customized iOS app for the products that include the entire array of iOS devices.

                                So what are you waiting for, we UTL IT Solution, building innovative applications, are the best iOS app consultant company. We provide you world-class, value-added, innovative, and cost-effective services to our client's business need. Our company's IT experts will help to transform ideas into realistic solutions.</Typography>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                            <Box className="swing-up-down">
                                <img src={iphone} alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="xl">
                    <Typography sx={{ justifyContent: "center", textAlign: "center", mb: 3, fontWeight: "bold" }} variant='h4'>iOS Software Development Kit (IOS SDK)</Typography>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                            <Box className="swing-up-down">
                                <img src={iphone2} alt="" />
                            </Box>
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                            <Typography sx={{ color: "var(--color-dark)", }}>The iOS SDK is a set of tools for the origin of apps for the Apple mobile operating system. This tool also helps to create and develop mobile apps for iOS devices such as iPhones, iPods, and iPads.

                                The iOS app development is possible by using the tools and technologies, capabilities, and languages included in the iOS SDK. Some of the essential iOS SDK is the Cocoa Touch frameworks that comprise the Map Kit, GameKit, UIKit, Foundation kit, and PushKit.

                                These structures allow you to manage the iPhone or iPad camera, add voice communication using SiriKit, search music, increase viewing and entertaining via AirPlay 2, and also add iMessage Business Chat to your application.</Typography>
                        </Grid>

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
