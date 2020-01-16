import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

let toDoData = [
    {
        task: 'Organize Existence',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817284358,
        completed: false
    },
    {
        task: 'Walk Kafka',
        id: 1528417084358,
        completed: false
    }, {
        task: 'Ride Skateboard',
        id: 1528717084358,
        completed: true
    }, {
        task: 'Lift Weights',
        id: 1528817884358,
        completed: false
    }, {
        task: 'Eat Spaghetti',
        id: 1528817044358,
        completed: false
    }, {
        task: 'Consume Rigatoni',
        id: 1528817384358,
        completed: false
    }, {
        task: 'Code React',
        id: 1522817084358,
        completed: false
    }, {
        task: 'Go Out For Drinks',
        id: 1528817024358,
        completed: false
    }
];

class App extends React.Component {

    constructor() {
        super();
        this.state = {taskList: toDoData};
        this.handleTaskSubmission = this.handleTaskSubmission.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
    }

    handleTaskSubmission = (e, task) => {
        e.preventDefault();
        let newTask = {
            task: task,
            id: Date.now(),
            completed: false
        };
        this.setState({taskList: [...this.state.taskList, newTask]});
    }

    clearCompleted = (e, task) => {
        e.preventDefault();
        this.setState({taskList: this.state.taskList.filter(task => !task.completed)});
    }

    markCompleted = (e, completedTask) => {
        console.log("markcompleted has fired");
        e.preventDefault();
        this.setState({
                taskList: this.state.taskList.map(task => {
                    if (task.task === completedTask) {
                        return {...task, completed: !task.completed};
                    }
                    return task;
                })
            }
        )
    }

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
                <ToDoForm handleTaskSubmission={this.handleTaskSubmission}/>
                <ToDoList
                    taskList={this.state.taskList}
                    clearCompleted={this.clearCompleted}
                    markCompleted={this.markCompleted}
                />
            </div>
        );
    }
}

export default App;
