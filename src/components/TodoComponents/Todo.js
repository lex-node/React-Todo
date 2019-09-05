/*- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.*/
import React from 'react';

const ToDo = props => {
    return (
        <div>
            {props.toDoData.map(task => (
                <div>
                    <h2>{task.task}</h2>
                    <p>This task has id {task.id} and {task.completed ? " HAS been" : " has NOT been"} completed</p>
                </div>
            ))
        }
        </div>
    );
};

export default ToDo;


