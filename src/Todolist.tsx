import React, {useState} from 'react'
// import {TaskType} from "./App";
import {Button} from "./Button";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    subtitle: string
    description: string
    tasks: TaskType[]
    date?: string
    removeTask: (taskId: number) => void
    // changeTodoListFilter: (nextFilter: FilterValuesType) => void
}

export const Todolist = (
    {
        title,
        subtitle,
        description,
        tasks,
        date,
        removeTask,
        // changeTodoListFilter
    }: PropsType) => {
    // const {title, subtitle, description, tasks} = props


    // Local state
    const [filter, setFilter] = useState<FilterValuesType>("all")
    // const changeTodoListFilter = (nextFilter: FilterValuesType) => {
    //     setFilter(nextFilter)
    // }

    // UI
    const getTasksForTodoList = (allTasks: Array<TaskType>, nextFilterValue: FilterValuesType) => {
        switch (nextFilterValue) {
            case "active":
                return allTasks.filter(t => t.isDone === false);
            case "completed":
                return allTasks.filter(t => t.isDone === true);
            default:
                return allTasks;
        }
    }

    const tasksForTodoList = getTasksForTodoList(tasks, filter)

    const tasksList: Array<JSX.Element> = tasksForTodoList.map(task => {
            const removeTaskHandler = () => removeTask((task.id))

            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={removeTaskHandler}>x</button>
                </li>
            )
    })

    return (
        <div className={"todolist"}>
            <h3 className={"title"}>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>

            <div>
                <input/>
                <Button title={'+'}/>
            </div>

            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasksList}

                    {/*{tasksForTodoList.map(task => {*/}
                    {/*    const removeTaskHandler = () => removeTask((task.id))*/}

                    {/*    return (*/}
                    {/*        <li key={task.id}>*/}
                    {/*            <input type="checkbox" checked={task.isDone}/>*/}
                    {/*            <span>{task.title}</span>*/}
                    {/*            <button onClick={removeTaskHandler}>x</button>*/}
                    {/*        </li>*/}
                    {/*    )*/}
                    {/*})}*/}
                </ul>
            )}

            <div>
                <Button onClick={() => setFilter("all")} title={"All"} />
                <Button onClick={() => setFilter("active")} title={"Active"} />
                <Button onClick={() => setFilter("completed")} title={"Completed"} />
            </div>
            <div>{date}</div>
        </div>
    )
}