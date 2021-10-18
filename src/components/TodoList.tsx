import React from "react";
import {ITodo} from "../intefaces";

type TodoListProps = {
    todos: ITodo[],
    onToggle(id:Number):void,
    onRemove(id:Number):void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle,onRemove}) => {

    const removeHandler = (evt: React.MouseEvent, id: number) => {
        evt.preventDefault()
        onRemove(id)
    }

    if(todos.length === 0){
        return (
            <p>
                Пока дел нет
            </p>
        )
    }
    return(
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if(todo.completed) classes.push('completed')
                return(
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={(evt) => removeHandler(evt, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}