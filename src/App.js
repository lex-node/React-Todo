import React from 'react';
import ToDo from './components/TodoComponents/Todo';

let toDoData = [
    {
        task: 'Organize Existence',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    },
    {
        task: 'Walk Kafka',
        id: 1528817084358,
        completed: false
    }, {
        task: 'Ride Skateboard',
        id: 1528817084358,
        completed: true
    }, {
        task: 'Lift Weights',
        id: 1528817084358,
        completed: false
    }, {
        task: 'Eat Spaghetti',
        id: 1528817084358,
        completed: false
    }, {
        task: 'Consume Rigatoni',
        id: 1528817084358,
        completed: false
    }, {
        task: 'Code React',
        id: 1528817084358,
        completed: false
    }, {
        task: 'Go Out For Drinks',
        id: 1528817084358,
        completed: false
    }
];


class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    constructor() {
        super();
        this.state = {
            toDoData
        };
    }

render() {
    return (
        <div>
            <h2>Welcome to your Todo App!</h2>
            <ToDo
                toDoData={this.state.toDoData}
            />
        </div>
    );
}
}

export default App;
