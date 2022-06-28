import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const TableTitle = styled(Typography)(({ theme }) => ({
    flex: '1 1 100%',
    color: theme.palette.common.white,
}));

export default TableTitle;
