import React from 'react'
import {TaskType} from "./App";
import {Button} from "./Button";

type PropsType = {
    title: string
    subtitle: string
    description: string
    tasks: TaskType[]
    date?: string
}

export const Todolist = ({ title, subtitle, description, tasks, date }: PropsType) => {
    // const {title, subtitle, description, tasks} = props

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
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}

            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
            <div>{date}</div>
        </div>
    )
}