import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

// export type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    // Global state
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])
    // const state = result[0]
    // const setState = result[1]

    // console.log(result)

    const removeTask = (taskId: number) => {
        // удалили таску из массива
        // new version of state with changes
        // const newState = []
        // for (let i = 0; i < tasks.length; i++) {
        //     if (tasks[i].id !== taskId) {
        //         newState.push(tasks[i])
        //     }
        // }

        const newState = tasks.filter(t => t.id !== taskId)
        setTasks(newState)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                subtitle="React"
                description="Frontend"
                tasks={tasks}
                date={'26.03.2024'}
                removeTask={removeTask}
                // changeTodoListFilter={changeTodoListFilter}
            />
            {/*<Todolist title="Songs" subtitle="Let's go everything" description="Cool music" tasks={tasks2}/>*/}
            {/*<Todolist title="Books" subtitle="First law" description="Good dark fantasy" tasks={tasks3} date={'13.04.2024'}/>*/}
        </div>
    );
}

export default App;


// const tasks1: Array<TaskType> = [
//     { id: 1, title: 'HTML&CSS', isDone: true },
//     { id: 2, title: 'JS', isDone: true },
//     { id: 3, title: 'React', isDone: false },
//     { id: 4, title: 'Redux', isDone: false },
//     { id: 5, title: 'Typescript', isDone: false },
//     { id: 6, title: 'RTK query', isDone: false },
// ]

// const tasks2: Array<TaskType> = [
//     // { id: 1, title: 'Hello world', isDone: true },
//     // { id: 2, title: 'I am Happy', isDone: false },
//     // { id: 3, title: 'Yo', isDone: false },
//     // { id: 4, title: 'Redux', isDone: false },
// ]

// const tasks3: Array<TaskType> = [
//     { id: 1, title: 'Goodbye world', isDone: true },
//     { id: 2, title: 'I am SadBoy', isDone: false },
//     { id: 3, title: 'Hole', isDone: true },
//     // { id: 4, title: 'Redux', isDone: false },
// ]