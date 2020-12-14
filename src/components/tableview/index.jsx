import React from 'react';
import PropTypes from 'prop-types';
import { Label, CustomInput, Button, Table } from 'reactstrap';

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
	<tr>
		<th scope='row'>
			<CustomInput
				type='checkbox'
				id={todo.id}
				checked={todo.isSelect}
				onChange={() => toggleSelect(todo.id)}
			/>
		</th>
		<td><Label for={todo.id}>{new Date(todo.time).toDateString()}</Label></td>
		<td><Label for={todo.id}>{todo.text}</Label></td>
		<td><Label for={todo.id}>{todo.description}</Label></td>
		<td>
			<Button
				color={todo.isComplete ? 'danger' : 'success'}
				onClick={() => toggleComplete(todo.id)}
			>
				{todo.isComplete ? 'Completed' : ' Running'}
			</Button>
		</td>
	</tr>
);

RowItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => (
	<Table>
		<thead>
			<tr>
				<th>#</th>
				<th>Date</th>
				<th>Task</th>
				<th>Description</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{todos.map(todo => (
				<RowItem
					key={todo.id}
					todo={todo}
					toggleSelect={toggleSelect}
					toggleComplete={toggleComplete}
				/>
			))}
		</tbody>
	</Table>
);

TableView.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

export default TableView;
