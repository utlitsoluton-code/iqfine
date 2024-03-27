import { Box, Button, Container, Grid, Stack, Typography, Modal, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import React from 'react'
import technologies from "../../assets/banner/technolgy.png"
import features from "../../assets/features.svg"
import features2 from "../../assets/features2.svg"
import features3 from "../../assets/features3.svg"
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from '../ContactForm/ContactForm';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default function Technologies() {
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
    const items = [
        { text: 'React.js, Angular.js, Node.js, JavaScript,PHP', },
        { text: 'Python, HTML, CSS, MongoDB, SQL', },
    ];
    const items2 = [
        { text: 'Magento' },
        { text: 'Adobe Commerce Cloud' },
        { text: 'NetSuite' },
        { text: 'EPiServer' },
    ];
    const items3 = [
        { text: 'iOS - Swift, Objective-C' },
        { text: 'Android - Java' },
        { text: 'Cross-Platform - Ionic, Sencha, Cordova, PhoneGap' },
        { text: 'React Native' },
    ];
    return (
        <>
            <Box sx={{ background: "var(--color-blue)" }}>
                <Container sx={{ py: 5 }}>
                    <Typography color={"#fff"} fontWeight={"bold"} variant='h3' textAlign={"center"}>Technologies</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{ display: { xs: 'inline-block', md: 'none', }, }}>
                            <Box >
                                <img src={technologies} alt="" />
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{ color: "white", }} >
                            <Typography sx={{ mt: 2, textAlign: 'justify', }} className='font-style'>
                                The internet is a vast network connecting computers worldwide. Artificial Intelligence (AI) makes machines smart and able to learn. Cloud computing stores data online instead of on your device. Virtual Reality (VR) creates computer-generated environments for immersive experiences. 3D printing builds objects layer by layer from digital models. Renewable energy, like solar power, harnesses natural resources for electricity. Blockchain ensures secure and transparent transactions. These technologies impact daily life, transforming how we work, connect, and solve problems.
                            </Typography>
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
                            display: { xs: 'none', md: 'inline-block', }
                        }}>
                            <img src={technologies} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container sx={{ py: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box >
                            <img src={features} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            Open Source
                        </Typography>
                        <Typography sx={{ color: "var(--color-dark2)" }}>
                            <Box >
                                <Typography>  Language and Tools </Typography>
                                <List>
                                    {items.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon><ChevronRightIcon /></ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Box>
                </Box>
                <Divider sx={{ mt: 5 }} />
            </Container>
            <Container sx={{ py: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: { md: "none", xs: "inline-block" } }}>
                        <Box>
                            <img src={features2} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            e-Commerce
                        </Typography>
                        <Typography sx={{ color: "var(--color-dark2)" }}>
                            <Box >
                                <List>
                                    {items2.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon><ChevronRightIcon /></ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} xl={6} xs={12} sx={{
                        display: {
                            xs: 'none',
                            md: 'inline-block',
                        }
                    }}>
                        <img src={features2} alt="" />
                    </Grid>
                </Grid>
                <Box>
                </Box>
                <Divider sx={{ mt: 5 }} />
            </Container>
            <Container sx={{ py: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Box>
                            <img src={features3} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            Mobile
                        </Typography>
                        <Typography sx={{ color: "var(--color-dark2)" }}>
                            <Box >
                                <List>
                                    {items3.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon><ChevronRightIcon /></ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Box>
                </Box>
                <Divider sx={{ mt: 5 }} />
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: "10px", width: '90%', maxWidth: '600px', }}>
                    <Container>
                        <ContactForm closeIcon={closeIconComponent} />
                    </Container>
                </div>
            </Modal>
        </>
    )
}
