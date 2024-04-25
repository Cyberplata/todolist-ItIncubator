import React, {useState} from 'react'
// import {TaskType} from "./App";
import {Button} from "./Button";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    subtitle: string
    description: string
    tasks: TaskType[]
    date?: string
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
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
        addTask,
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
                    <Button onClick={removeTaskHandler} title={'+'}/>
                </li>
            )
    })

    const onChangeHandlerInput = () => {

    }

    const onClickHandlerButton = () => {
        addTask('Hi')
        // setTasks('')
    }

    const onClickHandlerCreator = (filter: FilterValuesType) => {
        return () => setFilter(filter)
    }

    return (
        <div className={"todolist"}>
            <h3 className={"title"}>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>

            <div>
                <input onChange={onChangeHandlerInput}/>
                <Button onClick={() => onClickHandlerButton()} title={'+'}/>
            </div>

            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasksList}
                </ul>
            )}

            <div>
                <Button onClick={onClickHandlerCreator("all")} title={"All"} />
                <Button onClick={onClickHandlerCreator("active")} title={"Active"} />
                <Button onClick={onClickHandlerCreator("completed")} title={"Completed"} />
            </div>
            <div>{date}</div>
        </div>
    )
}