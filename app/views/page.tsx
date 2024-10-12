"use client"
import React from 'react'
import { Container, Grid, Card, CardHeader, CardContent } from '@mui/material'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Views = () => {


  const sailingData = [
    { no: 1, itineraryId: 4026410, sailingId: 805548, embarkationDate: 'Jul 12, 2024', description: 'Barcelona, Livorno, Rome/Civitavecchia, Barcelona', length: 5, zone: 'Mediterranean-West', status: 'Available' },
    { no: 2, itineraryId: 4026409, sailingId: 805549, embarkationDate: 'Jul 17, 2024', description: 'Barcelona, Lisbon, Vigo, La Coruna, Southampton', length: 7, zone: 'Europe-Southern', status: 'Available' },
    { no: 3, itineraryId: 4095676, sailingId: 805550, embarkationDate: 'Jul 24, 2024', description: 'Southampton, Stavanger, Olden, Alesund, Reykjavik, Liverpool, Southampton', length: 12, zone: 'Scandinavia & Fjords', status: 'Available' },
    { no: 4, itineraryId: 3945900, sailingId: 805729, embarkationDate: 'Aug 05, 2024', description: 'Southampton, Stavanger, Alesund, Olden, Haugesund, Southampton', length: 7, zone: 'Scandinavia & Fjords', status: 'Available' },
    { no: 5, itineraryId: 3780499, sailingId: 805730, embarkationDate: 'Aug 12, 2024', description: 'Southampton, La Rochelle, Southampton', length: 4, zone: 'Europe Coastal', status: 'Available' },
    { no: 6, itineraryId: 3893087, sailingId: 805731, embarkationDate: 'Aug 16, 2024', description: 'Southampton, Zeebrugge, Southampton', length: 3, zone: 'Europe Coastal', status: 'Available' },
    { no: 7, itineraryId: 3856578, sailingId: 805732, embarkationDate: 'Aug 19, 2024', description: 'Southampton, Bilbao, Southampton', length: 4, zone: 'Europe-Southern', status: 'Available' },
    { no: 8, itineraryId: 3893088, sailingId: 805733, embarkationDate: 'Aug 23, 2024', description: 'Southampton, La Coruna, Southampton', length: 4, zone: 'Europe-Southern', status: 'Available' },
    { no: 9, itineraryId: 3893089, sailingId: 805734, embarkationDate: 'Aug 27, 2024', description: 'Southampton, La Coruna, Vigo, Southampton', length: 5, zone: 'Europe-Southern', status: 'Available' },
    { no: 10, itineraryId: 3990401, sailingId: 805735, embarkationDate: 'Sep 01, 2024', description: 'Southampton, Hamburg, Amsterdam, Zeebrugge, Southampton', length: 7, zone: 'Europe Coastal', status: 'Closed' },
    { no: 11, itineraryId: 3942654, sailingId: 805736, embarkationDate: 'Sep 08, 2024', description: 'Southampton, Greenock, Liverpool, Cork, Portland/England, Southampton', length: 7, zone: 'British Isles', status: 'Available' },
    { no: 12, itineraryId: 3958556, sailingId: 816523, embarkationDate: 'Oct 20, 2024', description: 'Southampton, Vigo, Lisbon, Ponta Delgada, Lighthouse Point, Fort Lauderdale', length: 13, zone: 'Transatlantic & Repositioning', status: 'Available' },
    { no: 13, itineraryId: 3856586, sailingId: 816524, embarkationDate: 'Nov 02, 2024', description: 'Fort Lauderdale, Nassau, Castaway Cay, Fort Lauderdale', length: 4, zone: 'Bahamas', status: 'Available' },
    { no: 14, itineraryId: 3958547, sailingId: 816525, embarkationDate: 'Nov 06, 2024', description: 'Fort Lauderdale, Lighthouse Point, Castaway Cay, Fort Lauderdale', length: 3, zone: 'Bahamas', status: 'Available' },
    { no: 15, itineraryId: 3958550, sailingId: 816526, embarkationDate: 'Nov 09, 2024', description: 'Fort Lauderdale, Cozumel, Castaway Cay, Fort Lauderdale', length: 5, zone: 'Caribbean-Western', status: 'Available' },
    { no: 16, itineraryId: 3958554, sailingId: 816527, embarkationDate: 'Nov 14, 2024', description: 'Fort Lauderdale, Nassau, Lighthouse Point, Fort Lauderdale', length: 4, zone: 'Bahamas', status: 'Available' },
    { no: 17, itineraryId: 3960708, sailingId: 816528, embarkationDate: 'Nov 18, 2024', description: 'Fort Lauderdale, Nassau, Lighthouse Point, Castaway Cay, Fort Lauderdale', length: 5, zone: 'Bahamas', status: 'Available' },
  ];
  
  const columns = [
    { accessorKey: 'no', header: 'No' },
    { accessorKey: 'itineraryId', header: 'Itinerary Id' },
    { accessorKey: 'sailingId', header: 'Sailing Id' },
    { accessorKey: 'embarkationDate', header: 'Embarkation Date' },
    { accessorKey: 'description', header: 'Description' },
    { accessorKey: 'length', header: 'Length' },
    { accessorKey: 'zone', header: 'Zone' },
    { accessorKey: 'status', header: 'Status' },
  ];


  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sample Chart',
      },
    },
  };

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2} sx={{marginTop: 10}}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={3}>
          <Card elevation={4}>
            <CardHeader title="Sailings" />
            <CardContent>
               <Bar data={data} options={options} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card elevation={4}>
            <CardHeader title="Itneary" />
            <CardContent>
            <Bar data={data} options={options} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card elevation={4}>
            <CardHeader title="Cruise Search" />
            <CardContent>
              <iframe src="https://cs.cruisebase.com/cs/?skin=1" frameBorder="0" width="100%" height="auto"
                      allowFullScreen></iframe>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} height="100%">
          <Card elevation={4}>
            <CardHeader title="Price Drop" />
            <CardContent>
              <iframe src="https://css.cruisebase.com/pricedrop" frameBorder="0" width="100%" height="auto"
                      allowFullScreen></iframe>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={4}>
            <CardHeader title="Grid Table" />
            <CardContent>
                <MaterialReactTable
      columns={columns}
      data={sailingData}
    />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    )
}

export default Views