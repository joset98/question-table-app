import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableSortLabel, { tableSortLabelClasses } from '@mui/material/TableSortLabel';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#242222',
        color: theme.palette.common.white,
    },

    [`&.${tableCellClasses.body}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 14,
        border:'0.5px inset white',
    },
}));

const StyledTableLabel = styled(TableSortLabel)(({ theme }) => ({
    [`&.${tableSortLabelClasses.active}`]: {
        color: theme.palette.common.white,
    },
    [`&.${tableSortLabelClasses.root}:hover`]: {
        color: theme.palette.common.white,
        opacity: 0.7
    },
    [`& .${tableSortLabelClasses.icon}`]: {
        fontSize: 25,
    },
    [`&.${tableSortLabelClasses.active} .${tableSortLabelClasses.icon}`]: {
        color: 'green',
        fontSize: 25,
    },
}));

export { StyledTableCell, StyledTableLabel};