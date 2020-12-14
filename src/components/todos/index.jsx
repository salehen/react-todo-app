import React from 'react';
import shortid from 'shortid';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import TableView from '../tableview';
import ListView from '../listview';
import Controller from '../controllers';
import CreateTodoForm from '../create-todo-form';


class Todos extends React.Component {
    constructor(props) {
        super(props);
        const localTodos = JSON.parse(localStorage.getItem('todos'));

        this.state = {
            todos: localTodos ? localTodos : [],
            isOpenTodoForm: false,
            searchTerm: '',
            view: 'list',
            filter: 'all'
        };
    }

    toggleSelect = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isSelect = !todo.isSelect;

        this.setState({ todos });
    };

    toggleComplete = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isComplete = !todo.isComplete;

        this.setState({ todos });
    };

    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }

    handleSearch = value => {
        this.setState({
            searchTerm: value
        })
    }

    createTodo = todo => {
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;

        const todos = [todo, ...this.state.todos];
        this.setState({ todos });
        localStorage.setItem('todos', JSON.stringify(todos));
        this.toggleForm();
    }

    handleFilter = filter => {
        this.setState({ filter });
    };

    changeView = event => {
        this.setState({
            view: event.target.value
        });
    };

    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        localStorage.setItem('todos', JSON.stringify(todos));
        this.setState({ todos });
    };

    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete);
        localStorage.setItem('todos', JSON.stringify(todos));
        this.setState({ todos });
    };

    reset = () => {
        this.setState({
            filter: 'all',
            searchTerm: '',
            view: 'list',
            isOpenTodoForm: false
        });
    };

    performSearch = () => {
        return this.state.todos.filter(todo =>
            todo.text
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
        );
    };

    performFilter = todos => {
        const { filter } = this.state;
        if (filter === 'completed') {
            return todos.filter(todo => todo.isComplete);
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete);
        } else {
            return todos;
        }
    };

    getView = () => {
        let todos = this.performSearch();
        todos = this.performFilter(todos);
        return this.state.view === 'list' ? (
            <ListView
                todos={todos}
                toggleComplete={this.toggleComplete}
                toggleSelect={this.toggleSelect}
            />
        ) : (
                <TableView
                    todos={todos}
                    toggleComplete={this.toggleComplete}
                    toggleSelect={this.toggleSelect}
                />
            );
    };


    render() {
        return (
            <div>
                <h1 className='display-4 text-center mb-5'>Todo Lists</h1>
                <Controller
                    term={this.state.searchTerm}
                    view={this.state.view}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                    currentFilter={this.state.filter}
                />
                <div className='mt-3'>{this.getView()}</div>

                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
					</ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos;