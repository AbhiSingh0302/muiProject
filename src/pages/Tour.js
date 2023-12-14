import { Container, Typography, Box } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import { useParams } from "react-router";
import cities from "../data.json";
import { useState, useEffect } from "react";
import Accordion from "../components/Accordion";
import BottomNav from "../components/BottomNav";
import Alert from "../components/Alert";
import { useSelector } from "react-redux";

const Tour = () => {
    const params = useParams();
    const [city, setCity] = useState({});
    const show = useSelector(state => state.show);

    useEffect(() => {
        cities.forEach(ele => {
            const place = ele.tours.find(e => +e.id === +params.id)
            if (place) {
                setCity(place);
                return;
            }
        })
    }, [params])

    return <Container sx={{ width: 900, paddingBottom: 10}}>
    {show && <Alert/>}
        <Typography
            variant="h3"
            component="h1"
            marginTop={3}>
            {city.name}
        </Typography>
        <Box
            marginTop={3}
            sx={{ display: "flex" }}>
            <img
                src={city.image}
                alt="vegas"
                height={325}
                width={500} />
            <ImageCollage />
        </Box>
        <Typography variant="body1" gutterBottom sx={{marginY: 2}}>
            Travelling has changed significantly thanks to technology. In the earlier days, it was not easy to travel. Travelling on foot or on animals was the only option back then. Ships were also an option but they were too risky.
            Further, people use bullocks and horse carts and even camels to travel. Sled was an option for people travelling to snow-covered regions. Moreover, it was a hassle to travel even to a short distance as it consumed too much time.
            However, with the changing times and revolutionary technology, travelling has become one of the easiest things to do. There are so many new ways and means to travel that the travel game has changed drastically.
      </Typography>
      <Accordion/>
      <BottomNav/>
    </Container>
}

export default Tour;