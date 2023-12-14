import * as React from 'react';
import Alert from '@mui/material/Alert';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import { hideAlert } from '../stores';

export default function BasicAlerts(props) {
    const dispatch = useDispatch();
  return (
      <Alert severity="success" sx={{ position:"fixed", top:"5%", left:"25%", width:'50%', zIndex: 3}}>
      Successfully Booked — check it out!
      <CancelIcon sx={{position: "absolute", right: "5px"}} onClick={() => dispatch(hideAlert())}/>
      </Alert>
  );
}