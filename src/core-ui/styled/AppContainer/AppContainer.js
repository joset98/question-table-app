import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const AppContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10),
}));

export default AppContainer;
