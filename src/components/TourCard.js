import {Paper, Grid, Box, Typography, Rating, createTheme, ThemeProvider} from "@mui/material";
import {AccessTime} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    }
                },
            ]
        }
    }
})

const TourCard = ({tour}) => {
    let history = useNavigate();

    const clickHandler = () => {
        console.log("sd");
        history(`/${tour.id}`);
    }

    return <Grid item xs={3}>
    <ThemeProvider theme={theme}>
        <Paper elevation={3} onClick={clickHandler}>
        <img
        src={tour.image}
        alt="tour"
        className="img"
        />
        <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
                {tour.name}
            </Typography>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <AccessTime sx={{width: 12.5, marginRight: 0.5}}/>
                <Typography variant="body2" component="p">{tour.duration} hours</Typography>
            </Box>
            <Box sx={{display: "flex", alignItems: "center", marginTop: "3"}}>
            <Rating name="read-only" value={tour.rating} readOnly precision={0.5} size="small"/>
            <Typography variant="body2" component="p" marginLeft={0.5}>{tour.rating}</Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>{tour.numberOfReviews} reviews</Typography>
            </Box>
            <Box>
                <Typography variant="h6" component="h3">From Rs {tour.price} /-</Typography>
            </Box>
        </Box>
        </Paper>
        </ThemeProvider>
    </Grid>
}

export default TourCard;