import React from 'react';
import PropTypes from 'prop-types';
import { Label, ListGroup, ListGroupItem, CustomInput, Button } from 'reactstrap';

// List Item Component
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
	return (
		<ListGroupItem className='d-flex align-items-center'>
			<CustomInput
				type='checkbox'
				id={todo.id}
				checked={todo.isSelect}
				onChange={() => toggleSelect(todo.id)}
			/>
			<Label for={todo.id}>
				<div className='mx-3'>
					<h4>{todo.text}</h4>
					<h6>{todo.description}</h6>
					<p>{new Date(todo.time).toDateString()}</p>
				</div>
			</Label>
			<Button
				className='ml-auto'
				color={todo.isComplete ? 'danger' : 'success'}
				onClick={() => toggleComplete(todo.id)}
			>
				{todo.isComplete ? 'Completed' : 'Running'}
			</Button>
		</ListGroupItem>
	);
};

ListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
	return (
		<ListGroup>
			{todos.map(todo => (
				<ListItem
					key={todo.id}
					todo={todo}
					toggleSelect={toggleSelect}
					toggleComplete={toggleComplete}
				/>
			))}
		</ListGroup>
	);
};

ListView.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

export default ListView;
