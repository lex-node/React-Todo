import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div style={{borderStyle: "solid", padding: "15px"}}>
                {this.props.task.completed ? <h2 style={{textDecoration: "line-through"}}>{this.props.task.task}</h2> :
                    <h2>{this.props.task.task}</h2>}
                <p>Completed? {this.props.task.completed ? "Yes" : "Not yet"}</p>
                <button id={this.props.task} onClick={(event) => {
                    event.persist();
                    this.props.handleTaskCompletion(event)
                }}>Mark Completed
                </button>
            </div>
        );
    }
}

export default Todo;



