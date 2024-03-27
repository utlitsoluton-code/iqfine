import { Box, Button, Container, Divider, Grid, IconButton, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect, } from 'react'
import career from "../../assets/career.png"
import career2 from "../../assets/career2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import word from "../../assets/icons/word.png"
import react from "../../assets/icons/react.png"
import php from "../../assets/icons/php.png"
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import CareerForm from '../careerForm/CarerForm'
import it from "../../assets/icons/it.png"
import careerbanner from "../../assets/banner/carrerbanner.png"
export default function Career() {
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
    useEffect(() => {
        // Initialize AOS
        AOS.init();
        // Optional: Refresh AOS on component updates
        AOS.refresh();
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <>

            <Box sx={{ background: "var(--color-blue)" }}>
                <Container sx={{ py: 5 }}>
                    <Typography color={"#fff"} fontWeight={"bold"} variant='h3' textAlign={"center"}>Build your Career With Us</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{
                            display: {
                                xs: 'inline-block',
                                md: 'none',
                            },
                        }}
                            data-aos="fade-up">
                            <Box sx={{ justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }}>
                                <img src={careerbanner} alt="" />
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{ color: "white", }} >
                            <Typography sx={{ mt: 2, textAlign: 'justify', }} className='font-style'>Welcome to UTL IT Solutions, where your career takes center stage! Join our dynamic team. At UTL, we prioritize our employees' growth and success. Enjoy a collaborative work environment that fosters innovation and continuous learning. Whether you're a seasoned professional or just starting your career, UTL IT Solutions provides opportunities for everyone. Explore diverse projects, build your skills, and thrive in a culture that values your unique contributions. Elevate your career with us, where each day brings new possibilities and a chance to make a real impact in the IT world. Join us on this exciting journey! </Typography>

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
                            <img src={careerbanner} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container sx={{ my: 5, p: 5, }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }} >
                        <Box className="swing-up-down">
                            <img src={career} alt="Director" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Box >
                            <Typography data-aos="fade-down" sx={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                py: 3
                            }} >
                                Our Team is growing Fast, We'd love your help in making "utlitsolution" more Special. Come join us!
                            </Typography>
                            <Typography data-aos="fade-down" sx={{ fontSize: "16px", color: "var(--color-dark)",textAlign:"justify" }}>Welcome to UTL IT Solutions, where we prioritize our employees' success! At UTL, we believe in fostering a dynamic and inclusive workplace. As part of our team, you'll find endless opportunities for professional growth and skill development. We value work-life balance, offering flexible schedules and remote work options. Our collaborative culture encourages innovation, and we invest in continuous learning to keep our team at the forefront of technology. UTL IT Solutions is not just a workplace; it's a community where your ideas matter. Join us to embark on a fulfilling career journey with ample support, recognition, and the chance to contribute to cutting-edge IT solutions. Your success is our priority!  </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Box >
                            <Typography data-aos="fade-down" sx={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                py: 3
                            }}>
                                Job is work you do to earn money and support yourself
                            </Typography>
                            <Typography data-aos="fade-down" sx={{ fontSize: "16px", color: "var(--color-dark)",textAlign:"justify"}}>Welcome to UTL IT Solutions, where we prioritise our employees' growth and well-being. At UTL, we believe in fostering a dynamic work environment that encourages innovation and collaboration. Joining us means unlocking a world of opportunities for professional development, with ongoing training programs and mentorship to guide you. We value work-life balance, providing flexible schedules and remote work options. Enjoy a supportive community that recognizes and rewards your efforts. UTL IT Solutions is not just a workplace; it's a family where your ideas matter. Explore your potential with us and build a rewarding career in a company that cares about your success.    </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                        <Box data-aos="fade-left" className="swing-up-down">
                            <img src={career2} alt="career" />
                        </Box>
                    </Grid>
                </Grid>
                <Box my={3} ><Typography variant="h4" sx={{ fontWeight: 600, textAlign: "center" }}> Current Opening </Typography> </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box data-aos="fade-down">

                            <Typography variant="h5" sx={{ fontWeight: 600, }}>IT Sales Executive </Typography>
                            <Box sx={{ justifyContent: "center", display: "flex", py: 2 }} data-aos="fade-down">
                                <img src={it} alt="" />
                            </Box>
                        </Box>
                        <Box data-aos="fade-up">

                            <Typography sx={{ fontSize: "16px", color: "var(--color-dark)",textAlign:"justify" }} >
                                We're hiring an IT Sales Executive with at least 6 months of experience. Join our dynamic team and showcase your sales prowess in the tech industry. If you have a passion for IT and a proven track record, we want to hear from you! Elevate your career with us and be part of our success story. Apply now!
                            </Typography>
                            <Box mt={2}>
                                <Button
                                    onClick={handleOpen}

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

                                >
                                    Apply Now
                                </Button>
                            </Box>

                        </Box>
                        <Divider
                            sx={{
                                mt: 2,
                                border: '1px dotted var(--color-blue)',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box></Box>

                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box data-aos="fade-down">
                            <Typography variant="h5" sx={{ fontWeight: 600, }}>WordPress</Typography>
                            <Box sx={{ justifyContent: "center", display: "flex", py: 2 }} >
                                <img src={word} alt="" />
                            </Box>
                        </Box>
                        <Box data-aos="fade-up">
                            <Typography sx={{ fontSize: "16px", color: "var(--color-dark)" ,textAlign:"justify"}} >
                                Firm grasp of the JavaScript language and its Knowledge, including ES6+ syntax.
                                Good understanding of React Component architecture and concepts.
                                Hands-on experience with React Native and all it's available API and components.
                                Knowledge of functional as well as object-oriented programming.
                                Ability to write well-documented, clean Javascript code.
                                Understanding of REST APIs, the document request model, and offline storage.
                                Familiarity with native build tools, like XCode, Android Studio.
                                Familiarity with code versioning tools such as Git, GitHub.
                                Qualification Required: B.Tech, MCA, MBA, BCA
                            </Typography>
                            <Box mt={2}>
                                <Button
                                    onClick={handleOpen}
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
                                    component={Link}>
                                    Apply Now
                                </Button>
                            </Box>
                        </Box>
                        <Divider
                            sx={{
                                mt: 2,
                                border: '1px dotted var(--color-blue)',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box data-aos="fade-down">

                            <Typography variant="h5" sx={{ fontWeight: 600, }}>PHP</Typography>
                            <Box sx={{ justifyContent: "center", display: "flex", p: 2 }}>
                                <img src={php} alt="" />
                            </Box>
                        </Box>
                        <Box data-aos="fade-up">

                            <Typography sx={{ fontSize: "16px", color: "var(--color-dark)" ,textAlign:"justify"}}>
                                Firm grasp of the JavaScript language and its Knowledge, including ES6+ syntax.
                                Good understanding of React Component architecture and concepts.
                                Hands-on experience with React Native and all it's available API and components.
                                Knowledge of functional as well as object-oriented programming.
                                Ability to write well-documented, clean Javascript code.
                                Understanding of REST APIs, the document request model, and offline storage.
                                Familiarity with native build tools, like XCode, Android Studio.
                                Familiarity with code versioning tools such as Git, GitHub.
                                Qualification Required: B.Tech, MCA, MBA, BCA
                            </Typography>
                            <Box mt={2}>
                                <Button
                                    onClick={handleOpen}

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
                                    component={Link}>
                                    Apply Now
                                </Button>
                            </Box>
                        </Box>
                        <Divider sx={{ mt: 2, border: '1px dotted var(--color-blue)', }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box data-aos="fade-down">
                            <Typography variant="h5" sx={{ fontWeight: 600, }}>React.js</Typography>
                            <Box sx={{ justifyContent: "center", display: "flex", py: 2 }}>
                                <img src={react} alt="" />
                            </Box>
                        </Box>
                        <Box data-aos="fade-up">
                            <Typography sx={{ fontSize: "16px", color: "var(--color-dark)" ,textAlign:"justify"}}>
                                Firm grasp of the JavaScript language and its Knowledge, including ES6+ syntax.
                                Good understanding of React Component architecture and concepts.
                                Hands-on experience with React Native and all it's available API and components.
                                Knowledge of functional as well as object-oriented programming.
                                Ability to write well-documented, clean Javascript code.
                                Understanding of REST APIs, the document request model, and offline storage.
                                Familiarity with native build tools, like XCode, Android Studio.
                                Familiarity with code versioning tools such as Git, GitHub.
                                Qualification Required: B.Tech, MCA, MBA, BCA
                            </Typography>
                            <Box mt={2}>
                                <Button
                                    onClick={handleOpen}
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
                                    component={Link}>
                                    Apply Now
                                </Button>
                            </Box>
                        </Box>
                        <Divider sx={{ mt: 2, border: '1px dotted var(--color-blue)', }} />
                    </Grid>
                </Grid>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: "10px", width: '90%',
                    maxWidth: '600px',
                }}>
                    <Container>
                        <CareerForm closeIcon={closeIconComponent} />
                    </Container>
                </div>
            </Modal>
        </>
    )
}
