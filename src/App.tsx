import './App.css';
import {Todolist} from "./Todolist";
import {useReducer, useState} from "react";
import {v1} from "uuid";
import {addTaskAC, removeTaskAC, taskReducer} from "./module/taskReducer";
import {changeFilterAC, filterReducer} from "./module/filterReducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, dispatchTasks] = useReducer(taskReducer, [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
    ])

    const [filter, dispatchFilter] = useReducer(filterReducer, 'all')

    const removeTask = (taskId: string) => {
        // const filteredTasks = tasks.filter((task) => {
        //     return task.id !== taskId
        // })
        // setTasks(filteredTasks)
        dispatchTasks(removeTaskAC(taskId))
    }

    const addTask = (title: string) => {
        // const newTask = {
        //     id: v1(),
        //     title: title,
        //     isDone: false
        // }
        // const newTasks = [newTask, ...tasks]
        // setTasks(newTasks)
        dispatchTasks(addTaskAC(title))
    }

    const changeFilter = (filter: FilterValuesType) => {
        // setFilter(filter)
        dispatchFilter(changeFilterAC(filter))
    }

    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(task => !task.isDone)
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
