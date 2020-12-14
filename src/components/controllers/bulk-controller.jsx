import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'reactstrap';

const BulkController = ({clearSelected, clearCompleted, reset}) => (
    <ButtonGroup>
        <Button color='danger' onClick={clearSelected}> <b>Clear Selected</b> </Button>
        <Button color='danger' onClick={clearCompleted}> <b>Clear Completed</b> </Button>
        <Button color='danger' onClick={reset}> <b>Reset</b> </Button>
    </ButtonGroup>
);

BulkController.propTypes = {
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

export default BulkController;