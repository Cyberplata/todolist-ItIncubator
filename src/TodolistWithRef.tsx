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

    const taskTitleInput = useRef<HTMLInputElement>(null) //Создадим ссылку, которая будет сохранять стабильность

    // const [valueInput, setValueInput] = useState("")

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
                    <Button onClick={removeTaskHandler} title={'x'}/>
                </li>
            )
    })

    // const onChangeHandlerInput = (event: ChangeEvent<HTMLInputElement> ) => {
    //     // console.dir(event)
    //     setValueInput(event.currentTarget.value)
    //     console.log(event.currentTarget.value)
    // }

    // const onClickHandlerButton = () => {
    //     addTask(valueInput)
    //     setValueInput('')
    //     // console.log('setValueInput', setValueInput)
    // }

    const onClickHandlerCreator = (filter: FilterValuesType) => () => setFilter(filter)
    const onClickAddTaskHandler = () => {
        // Пишем условие, чтобы реакту подсказать, если инпут создан, то добавляй значение. Получается мы начинаем всю движуху с инпутом, только после нажатия на кнопку - это не очень
        if (taskTitleInput.current) {
            console.log(taskTitleInput.current) // <input>

            const newTaskTitle = taskTitleInput.current.value
            addTask(newTaskTitle)
            taskTitleInput.current.value = ""
        }
    }

    return (
        <div className={"todolist"}>
            <h3 className={"title"}>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>

            <div>
                <input ref={taskTitleInput}/>
                {/*<input value={valueInput} onChange={onChangeHandlerInput}/>*/}

                <Button onClick={onClickAddTaskHandler} title={'+'}/>
                {/*<Button onClick={onClickHandlerButton} title={'+'}/>*/}
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