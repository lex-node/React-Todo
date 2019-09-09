import React from 'react';

/* takes in the to-do data and displays the task to the screen.*/

const ToDo = props => {
    return (
        <div>
            {
                <div>
                    <h2>{props.task.task}</h2>
                    <p>This task has id {props.task.id} and {props.task.completed ? " HAS been" : " has NOT been"} completed</p>
                </div>
        }
        </div>
    );
};

export default ToDo;


