import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const LinkButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2), 
    marginBottom: theme.spacing(2), 
    marginLeft: theme.spacing(0.25),
    marginRight: theme.spacing(0.25),
    backgroundColor: '#00000099', 
    color: 'white' 
}));

export default LinkButton;
