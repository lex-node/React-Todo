/*receives Todos array and iterates over the list, generating a new to do for each element in the array*/

import React from 'react';
import ToDo from './Todo';


const ToDoList = props => {
    return (
        <div>
            {props.taskList.map(task => (
                <div>
                    <ToDo key={task.id} task={task} markCompleted={props.markCompleted}/>
                </div>
            ))
            }
            <button onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>
    );
};

export default ToDoList;