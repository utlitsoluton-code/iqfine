import React from 'react'
import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material'
import Groups2Icon from '@mui/icons-material/Groups2';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
export default function WorkChart() {
    return (
        <>
            
            <Grid container spacing={2}>
                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                    <Card >
                        <CardContent>
                            <Box sx={{ textAlign: "center", alignItems: "center" }}>
                                <IconButton sx={{ fontSize: '3rem' }}>
                                    <DateRangeIcon fontSize="5rem" style={{ color: "var(--color-purple)" }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: "bold" }}>8+ Years</Typography>
                                <Typography sx={{ color: "var(--color-dark)" }}>Development Experience</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                    <Card >
                        <CardContent>
                            <Box sx={{ textAlign: "center", alignItems: "center" }}>
                                <IconButton sx={{ fontSize: '3rem' }}>
                                    <AppSettingsAltIcon fontSize="5rem" style={{ color: "var(--color-blue)" }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: "bold" }}>50+</Typography>
                                <Typography sx={{ color: "var(--color-dark)" }}>App & Web Developed</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                    <Card >
                        <CardContent>
                            <Box sx={{ textAlign: "center", alignItems: "center" }}>
                                <IconButton sx={{ fontSize: '3rem' }}>
                                    <Groups2Icon fontSize="5rem" style={{ color: "var(--color-pink)" }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: "bold" }}>55+</Typography>
                                <Typography sx={{ color: "var(--color-dark)" }}>Talented Squad</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                    <Card >
                        <CardContent>
                            <Box sx={{ textAlign: "center", alignItems: "center" }}>
                                <IconButton sx={{ fontSize: '3rem' }}>
                                    <RocketLaunchIcon fontSize="5rem" style={{ color: "var(--color-purple)" }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: "bold" }}>100%</Typography>
                                <Typography sx={{ color: "var(--color-dark)" }}>Projects Delivered</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                    <Card >
                        <CardContent>
                            <Box sx={{ textAlign: "center", alignItems: "center" }}>
                                <IconButton sx={{ fontSize: '3rem' }}>
                                    <TravelExploreIcon fontSize="5rem" style={{ color: "var(--color-blue)" }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: "bold" }}>5+</Typography>
                                <Typography sx={{ color: "var(--color-dark)" }}>Countries Served</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                    <Card >
                        <CardContent>
                            <Box sx={{ textAlign: "center", alignItems: "center" }}>
                                <IconButton sx={{ fontSize: '3rem' }}>
                                    <ThumbUpIcon fontSize="5rem" style={{ color: "var(--color-pink)" }} />
                                </IconButton>
                                <Typography sx={{ fontWeight: "bold" }}>45+</Typography>
                                <Typography sx={{ color: "var(--color-dark)" }}>Happy Clients</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    )
}
