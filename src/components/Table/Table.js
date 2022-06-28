import React from "react";
import PropTypes from 'prop-types';

import {
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Pagination,
} from '@mui/material';

import {
    Table as TemplateTable,
    TableBody,
    TableContainer,
    TableRow,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// components
import EnhancedTableHead from "./components/EnhancedTableHead";
import EnhancedTableToolbar from "./components/EnhancedTableToolbar";
// styles
import { StyledPaper, WrapperBox } from "../../core-ui/styled";
import { StyledTableCell } from "./styles/Table.styles";
import { FilterTableBox } from "./styles/TableBox.styles";
import { FormControlStyled } from "./styles/FormControlStyled";
// utils
import { getComparator, stableSort } from "../../utils";
import { Paginator } from "./styles/Paginator.styles";

const Table = ({
    headers = [],
    rows = [],
    title = 'Questions',
    filter,
    onChangeFilter }) => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState(headers[0].id);
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const pagesCount = Math.round(rows.length / rowsPerPage)

    const handleRequestSort = (evt, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (evt, newPage) => {
        setPage(newPage);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <WrapperBox>
            <StyledPaper>
                <EnhancedTableToolbar title={title} />

                <FilterTableBox>
                    <FormControlStyled variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-filter">filtrar pregunta</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-filter"
                            type='text'
                            sx={{backgroundColor: 'white'}}
                            value={filter}
                            onChange={onChangeFilter}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="filter"
                        />
                    </FormControlStyled>
                </FilterTableBox>

                <TableContainer>
                    <TemplateTable
                        sx={{ minWidth: 750 }}
                        aria-labelledby="questions-table"
                        size='medium'
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headers}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.id}
                                        >
                                            {
                                                headers.map((header, index) =>
                                                    <StyledTableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        key={row[header.id]}
                                                    >
                                                        {row[header.id]}
                                                    </StyledTableCell>
                                                )
                                            }
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <StyledTableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </TemplateTable>
                </TableContainer>

                <Paginator
                    hidePrevButton
                    variant="outlined" 
                    shape="rounded"
                    count={pagesCount}
                    page={page}
                    onChange={handleChangePage}
                />
            </StyledPaper>

        </WrapperBox>
    );
}

Table.propTypes = {
    headers: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default Table;