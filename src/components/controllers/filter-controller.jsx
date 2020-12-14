import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'reactstrap';

const FilterController = ({handleFilter, currentFilter}) => (
    
    <ButtonGroup>
        <Button className={currentFilter==='all'?'FilterBtn':''} onClick={() => handleFilter('all')}> All </Button>
        <Button className={currentFilter==='running'?'FilterBtn':''} onClick={() => handleFilter('running')}> Running </Button>
        <Button className={currentFilter==='completed'?'FilterBtn':''} onClick={() => handleFilter('completed')}> Completed </Button>
    </ButtonGroup>
);

FilterController.propTypes = {
    handleFilter: PropTypes.func.isRequired
};

export default FilterController;