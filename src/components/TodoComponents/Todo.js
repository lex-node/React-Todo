/* takes in the to-do data and displays the task to the screen.*/
import React from 'react';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }


    handleSubmit = (e) => {
        this.props.markCompleted(e, this.props.task.task);
    }

    render() {
        return (
            <div>
                <h2>{this.props.task.task}</h2>
                <p>This task has
                    id {this.props.task.id} and {this.props.task.completed ? " HAS been" : " has NOT been"} completed</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Completed?"/>
                </form>
            </div>
        )
    }
};

export default ToDo;


