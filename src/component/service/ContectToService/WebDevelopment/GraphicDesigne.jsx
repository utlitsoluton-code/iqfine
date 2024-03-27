import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import WorkChart from '../../workChart/WorkChart'
import ContactForm from '../../../ContactForm/ContactForm'

export default function GraphicDesigne() {
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
                        <Typography sx={{ justifyContent: "center", textAlign: "center", mb: 3, fontWeight: "bold" }} variant='h4'>Graphic Design Development Company </Typography>
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
        </>
    )
}
