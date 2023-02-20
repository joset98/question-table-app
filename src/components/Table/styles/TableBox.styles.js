import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const FilterTableBox = styled(Box)(({ theme }) => ({
    display:'flex', 
    justifyContent: 'end',
    padding: theme.spacing(1)
}));


export { FilterTableBox };