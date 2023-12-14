import TourCard from '../components/TourCard';
import { Container, Grid, Typography } from '@mui/material';
import cities from "../data.json";

const Home = () => {

    return (
        <div className="App">
          <Container sx={{marginY: 5}}>
          {cities.map(city => (
            <div key={city.id}>
            <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map(tour => (<TourCard key={tour.id} tour={tour}/>))}
              
            </Grid>
            </div>
          ))}
          </Container>
        </div>
      );
}

export default Home;