import PropTypes from 'prop-types';
import {
    Toolbar,
} from '@mui/material';

import TableTitle from "../../../core-ui/styled/TableTitle/TableTitle";

const EnhancedTableToolbar = ({ title }) => {

    return (
        <Toolbar>
            <TableTitle
                variant="h4"
                id="table-title"
                component="div"
            >
                {title}
            </TableTitle>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default EnhancedTableToolbar;