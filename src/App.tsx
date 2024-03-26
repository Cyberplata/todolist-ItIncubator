import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks1: Array<TaskType> = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'React', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
        { id: 5, title: 'Typescript', isDone: false },
        { id: 6, title: 'RTK query', isDone: false },
    ]

    const tasks2: Array<TaskType> = [
        // { id: 1, title: 'Hello world', isDone: true },
        // { id: 2, title: 'I am Happy', isDone: false },
        // { id: 3, title: 'Yo', isDone: false },
        // { id: 4, title: 'Redux', isDone: false },
    ]

    const tasks3: Array<TaskType> = [
        { id: 1, title: 'Goodbye world', isDone: true },
        { id: 2, title: 'I am SadBoy', isDone: false },
        { id: 3, title: 'Hole', isDone: true },
        // { id: 4, title: 'Redux', isDone: false },
    ]


    return (
        <div className="App">
            <Todolist title="What to learn" subtitle="React" description="Frontend" tasks={tasks1} date={'26.03.2024'}/>
            <Todolist title="Songs" subtitle="Let's go everything" description="Cool music" tasks={tasks2}/>
            <Todolist title="Books" subtitle="First law" description="Good dark fantasy" tasks={tasks3}/>
        </div>
    );
}

export default App;
