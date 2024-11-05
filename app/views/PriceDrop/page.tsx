"use client"
import Script from "next/script";
import React from 'react'
import { Container, Grid, Card, CardHeader, CardContent } from '@mui/material'

const PriceDropWidget = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2} sx={{marginTop: 10}}
                   direction="row"
                   justifyContent="center"
                   alignItems="center">
                <Grid item xs={12}>
                    <Card elevation={4}>
                        <CardHeader title="Price Drop iframe" />
                        <CardContent>
                            <iframe src="https://css.cruisebase.com/PriceDrop/" frameBorder="0" width="100%" height="800px"
                                    allowFullScreen></iframe>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card elevation={4}>
                        <CardHeader title="Price Drop No-iframe" />
                        <CardContent>
                            <div>
                                <Script
                                    src="https://css.cruisebase.com/PriceDrop/Content/js/price-drop-widget.js"
                                    strategy="afterInteractive"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
export default PriceDropWidget

