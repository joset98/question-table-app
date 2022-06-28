import { styled } from '@mui/material/styles';
import { Box, FormControl as TemplateFormControl } from '@mui/material';

const FormControlStyled = styled(TemplateFormControl)(({ theme }) => ({
    width: '25ch'
}));


export { FormControlStyled };