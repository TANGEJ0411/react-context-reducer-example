import React from 'react'
import { useTodoContext } from './TodoContext'

function Todo() {
    const { todo, toggleTodo, deleteTodo } = useTodoContext()

    return (
        todo.map((value) => {
            const { id, todoContent, complete } = value
            return (
                <div key={id} className='todo'>
                    <span style={{ textDecoration: complete ? "line-through" : null }}>{todoContent}</span>
                    <button onClick={() => { toggleTodo(id) }}>{complete ? "完成" : "還沒"}</button>
                    <button onClick={() => { deleteTodo(id) }}>刪除</button>
                </div>
            )
        })
    )
}

export default Todo