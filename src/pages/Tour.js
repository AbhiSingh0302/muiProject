import { Container, Typography, Box } from "@mui/material";
import ImageCollage from "../components/ImageCollage"; 
import { useParams } from "react-router";
import cities from "../data.json";
import { useState, useEffect } from "react";

const Tour = () => {
    const params = useParams();
    const [city, setCity] = useState({});

    useEffect(() => {
        cities.forEach(ele => {
            const place = ele.tours.find(e => +e.id === +params.id)
            if(place){
                setCity(place);
                return;
            }
        })
    }, [params])

    return <Container sx={{width: 900}}>
    <Typography
    variant="h3"
    component="h1"
    marginTop={3}>
    {city.name}
    </Typography>
    <Box
    marginTop={3}
    sx={{display: "flex"}}>
    <img 
    src={city.image}
    alt="vegas"
    height={325}
    width={500}/>
    <ImageCollage/>
    </Box>
</Container>}

export default Tour;