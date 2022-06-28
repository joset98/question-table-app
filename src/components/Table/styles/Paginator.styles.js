import { styled } from '@mui/material/styles';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import PaginationItem, { paginationItemClasses  } from '@mui/material/PaginationItem';

const Paginator = styled(Pagination)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center', 
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [`& .${paginationItemClasses.root}`]: {
        color: theme.palette.common.white,
        backgroundColor: '#00bc8c'
    },
    [`& .${paginationItemClasses.selected}`]: {
        color: theme.palette.common.white,
        backgroundColor: '#1ac599',
    },
}));


export { Paginator };