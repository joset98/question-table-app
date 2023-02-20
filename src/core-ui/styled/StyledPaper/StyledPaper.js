import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    marginBottom: theme.spacing(2),
    backgroundColor: '#383e4e',
}));

export default StyledPaper;
