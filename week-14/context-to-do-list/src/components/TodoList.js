import React from 'react';
import { ReactComponent } from 'react';
import Task from './Task';

import TodoContext from '../contexts/TodoContext';

class TodoList extends React.Component {

  static contextType = TodoContext;

    render() {
        const taskArray = Object.values(this.context.tasks)
        console.log(taskArray);
        return (
            <ul>
                {taskArray.map((task, idx) => <Task task={task} id={task.id} deleteTask={this.context.deleteTask} />)}
            </ul>
        );
    }
}

export default TodoList;
