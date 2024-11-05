"use client"
import React from 'react'
import { Container, Grid, Card, CardHeader, CardContent } from '@mui/material'

const CruiseSearch = () => {
    return (
        <Container maxWidth='lg'>
            <Grid  container spacing={2} sx={{marginTop: 10}}
                   direction="row"
                   justifyContent="center"
                   alignItems="center">
            <Grid item xs={6}>
                <Card elevation={4}>
                    <CardHeader title="Cruise Search" />
                    <CardContent>
                        <iframe src="https://cs.cruisebase.com/cs/?skin=1" frameBorder="0" width="100%" height="auto"
                                allowFullScreen></iframe>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
        </Container>
    );
};
export default CruiseSearch

