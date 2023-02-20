import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";

const NavBox = styled(Box)(() => ({
    display: 'flex', 
    flexGrow: 1, 
    justifyContent: 'end' 
}));


export { NavBox };