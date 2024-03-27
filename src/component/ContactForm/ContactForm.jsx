import React, { useRef } from 'react';
import { Box, Typography, Card, CardContent, TextField, Button, Grid, } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import emailjs from '@emailjs/browser';
import LanguageIcon from '@mui/icons-material/Language';
import InputAdornment from '@mui/material/InputAdornment';
export default function ContactForm({ closeIcon }) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // If all validations pass, send the email
        emailjs
            .sendForm('service_v8nihiy', 'template_o3x798g', form.current, 'fmQNwxF025DzHWUL9')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <>
            <Box sx={{ height: "100%", }}>
                <Card sx={{ p: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', height: "100%" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {closeIcon}
                    </Box>
                    <CardContent>
                        <Typography variant='h5' sx={{ fontWeight: 600, textAlign: "center", }}>
                            Connect With Our Experts
                        </Typography>
                        <form ref={form} onSubmit={sendEmail}>
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                        <TextField
                                            type="text"
                                            name="user_first_name"
                                            fullWidth required placeholder="First Name*" variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"><PersonIcon /></InputAdornment>), }} />
                                    </Box>
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                        <TextField type="text" name="user_last_name" fullWidth required placeholder='Last Name' variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"><PersonIcon /></InputAdornment>), }} />
                                    </Box>
                                </Grid>
                                <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                        <TextField
                                            type="email"
                                            name="user_email"
                                            fullWidth required placeholder='Email*' variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"><EmailIcon /></InputAdornment>), }} />
                                    </Box>
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                        <TextField
                                            type="text"
                                            name="user_country_code"
                                            fullWidth required placeholder='City' variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"><LanguageIcon /></InputAdornment>), }} />
                                    </Box>
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                        <TextField type="text"
                                            name="user_mobile" fullWidth required placeholder='Mobile Number*' variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"><PhoneIcon /></InputAdornment>), }} />
                                    </Box>
                                </Grid>
                                <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                        <TextField type="text"
                                            name="user_message" fullWidth required placeholder='Message' variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"><MessageIcon /></InputAdornment>), }} />
                                    </Box>
                                </Grid>
                                <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                                        <Button size="large" type="submit" variant="contained" sx={{ background: "var(--color-pink)", '&:hover': { background: "var(--color-pink)", }, '&:focus': { background: "var(--color-pink)", }, '&:active': { background: "var(--color-pink)", }, }}>Submit</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Box>

        </>
    )
}
