import React from 'react';
import ToDo from './Todo';

/*receives Todos array and iterates over the list, generating a new to do for each element in the array*/

const ToDoList = props => {
    return (
        <div>
            {props.taskList.map(task => (
               <ToDo key={task.id} task={task}/>
            ))
        }
        </div>
    );
};

export default ToDoList;