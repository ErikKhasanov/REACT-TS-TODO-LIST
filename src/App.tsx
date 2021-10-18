import React, {useState, useEffect} from 'react';
import {HeadBar} from "./components/HeadBar";
import {InputForm} from "./components/InputForm";

import "./index.css"
import {TodoList} from "./components/TodoList";
import {ITodo} from "./intefaces";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (text: string) => {
        const newTodo:ITodo = {
            title: text,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos( todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removerHandler = (id:Number) => {
        const shoudRemove = window.confirm('Вы уверены, что хотите удалить?')
        if(shoudRemove) setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    return(
        <>
            <HeadBar/>
            <div className="container">
            <InputForm
                onAdd={addHandler}
            />
                <TodoList
                    todos={todos}
                    onRemove={removerHandler}
                    onToggle={toggleHandler}
                />
            </div>
        </>
    )
}

export default App