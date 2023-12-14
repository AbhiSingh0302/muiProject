import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { showAlert } from '../stores';

export default function SimpleBottomNavigation(props) {
    const dispatch = useDispatch();

  return (
    <Box sx={{ width: '100%',textAlign: 'center', paddingY: 1,backgroundColor: "#1976d2", position: 'fixed', bottom: 0, left: 0, right: 0}}>
        <Button variant="contained" color="success" size="medium" onClick={() => dispatch(showAlert())}>Book Now</Button>
    </Box>
  );
}