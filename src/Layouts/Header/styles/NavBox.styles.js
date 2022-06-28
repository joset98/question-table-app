import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";

const NavBox = styled(Box)(({ theme }) => ({
    display: 'flex', 
    flexGrow: 1, 
    justifyContent: 'end' 
}));


export { NavBox };