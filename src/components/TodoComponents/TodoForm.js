/*
TodoForm  holds input field and buttons for adding to-dos and clearing completed to-dos
input field takes in user input, and allows a user to add a to-do to list
Once a to-do is submitted, the To-do List re-renders and show sthe added to-do.
*/

import React from 'react';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = e => {
        // update state with each keystroke
        this.setState({value: e.target.value});
        console.log(this.state.value);
    };

    handleSubmit = e => {
        this.props.handleTaskSubmission(e, this.state.value);
        this.setState({value: ""});
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Task:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}

export default ToDoForm;

