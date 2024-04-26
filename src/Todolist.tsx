import React, {ChangeEvent, useRef, useState} from 'react'
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
    }: PropsType) => {


    // Local state
    const [filter, setFilter] = useState<FilterValuesType>("all")

    const [taskTitle, setTaskTitle] = useState("")

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

    const tasksList: Array<JSX.Element> | JSX.Element = tasksForTodoList.length
        ? tasksForTodoList.map(task => {
            const removeTaskHandler = () => removeTask((task.id))
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <Button onClick={removeTaskHandler} title={'x'}/>
                </li>
            )
        })
        : <div>Your tasksList is empty</div>

    const onClickHandlerCreator = (filter: FilterValuesType) => () => setFilter(filter)
    const onClickAddTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle('')
    }
    const isTitleTooLong = taskTitle.length > 15

    return (
        <div className={"todolist"}>
            <h3 className={"title"}>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>

            <div>
                <input
                    value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.currentTarget.value)
                    }}
                />

                <Button
                    disabled={!taskTitle || isTitleTooLong}
                    onClick={onClickAddTaskHandler}
                    title={'+'}
                />
                {/*// условный рендеринг*/}
                {isTitleTooLong && <div>Your task title is too long</div>}
            </div>

            {/*{tasks.length === 0 ? (*/}
            {/*    <p>Тасок нет</p>*/}
            {/*) : (*/}
                <ul>
                    {tasksList}
                </ul>
            {/*)}*/}

            <div>
                <Button onClick={onClickHandlerCreator("all")} title={"All"}/>
                <Button onClick={onClickHandlerCreator("active")} title={"Active"}/>
                <Button onClick={onClickHandlerCreator("completed")} title={"Completed"}/>
            </div>
            <div>{date}</div>
        </div>
    )
}