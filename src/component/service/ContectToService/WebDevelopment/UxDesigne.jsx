import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import WorkChart from '../../workChart/WorkChart'
import ContactForm from '../../../ContactForm/ContactForm'

export default function UxDesigne() {
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
        </>
    )
}
