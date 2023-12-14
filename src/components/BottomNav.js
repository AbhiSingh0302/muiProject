import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function SimpleBottomNavigation() {

  return (
    <Box sx={{ width: '100%',textAlign: 'center', paddingY: 1,backgroundColor: "#1976d2", position: 'fixed', bottom: 0, left: 0, right: 0}}>
        <Button variant="contained" color="success" size="medium" >Book Now</Button>
    </Box>
  );
}