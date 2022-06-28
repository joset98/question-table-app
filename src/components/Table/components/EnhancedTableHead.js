import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import {
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { StyledTableCell, StyledTableLabel } from '../styles/Table.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function EnhancedTableHead({
    order,
    orderBy,
    onRequestSort,
    headCells
}) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <StyledTableLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            IconComponent={ArrowDropDownIcon}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </ StyledTableLabel>
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    headCells: PropTypes.array.isRequired,
};
