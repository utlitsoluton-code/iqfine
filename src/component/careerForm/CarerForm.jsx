import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button, Grid, MenuItem } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import InputAdornment from '@mui/material/InputAdornment';
export default function CareerForm({ closeIcon }) {
    return (
        <>
            <Box sx={{ height: "100%", }}>
                <Card sx={{ p: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', height: "100%" }}>
                    <Box   sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {closeIcon}
                    </Box>
                    <CardContent>
                        <Typography variant='h5' sx={{ fontWeight: 600, textAlign: "center", }}>
                            Connect With Our Experts
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        placeholder='Fist Name*'
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        placeholder='Last Name*'
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        placeholder='Email*'
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        placeholder='Country Code*'
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LanguageIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        placeholder='Mobile Number*'
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PhoneIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        placeholder='Message*'
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MessageIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                                    <Button
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            background: "var(--color-pink)",
                                            '&:hover': {
                                                background: "var(--color-pink)", // Change color on hover
                                            },
                                            '&:focus': {
                                                background: "var(--color-pink)", // Change color on focus
                                            },
                                            '&:active': {
                                                background: "var(--color-pink)", // Change color on active
                                            },
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>

        </>
    )
}
