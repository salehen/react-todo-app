import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'reactstrap';

const SearchPanel = ({ term, handleSearch, toggleForm }) => (
	<div className='d-flex'>
		<Input
			placeholder='Find You Task'
			className='mr-3 col'
			value={term}
			onChange={e => handleSearch(e.target.value)}
		/>
		<Button color='success' onClick={toggleForm}>
			Add	New Task
		</Button>
	</div>
);

SearchPanel.propTypes = {
	term: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired
};

export default SearchPanel;
