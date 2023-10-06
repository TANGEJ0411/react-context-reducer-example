import { createContext, useContext, useReducer } from "react";
import TodoReducer, { ACTIONS, initState } from "./TodoReducer";

export const TodoContext = createContext(initState)

export const TodoProvider = ({ children }) => {

    //state 是 useReducer裡的state
    //dispatch 是用來觸發TodoReducer的函式會傳入一個物件，裡面會放{type:代表要傳入的動作和要帶入的資料叫做payload}
    //useReducer需要傳入兩個參數，第一是reducer的函式，第二是inital state初始值
    const [state, dispatch] = useReducer(TodoReducer, initState)
    console.log(state)

    //使用dispatch會觸發reducer內的動做或是方法
    //dispatch只是用來把資料傳進reducer內，所以可以在dispatch內新增參數通常是物件，讓他傳到reducer
    //要執行的動作action會被歸類在type裡面，帶資料進去通常會叫做payload
    const addTodo = (todoContent) => {
        const todo = todoObj(todoContent)
        const newTodo = state.todos.concat(todo)
        dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: newTodo } })
    }

    const toggleTodo = (id) => {
        const newTodo = state.todos.map((value) => {
            if (value.id === id) {
                return { ...value, complete: !value.complete }
            }
            return value
        })
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { todo: newTodo } })
    }

    const deleteTodo = (id) => {
        const newTodo = state.todos.filter((value) => {
            return value.id !== id
        })
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { todo: newTodo } })
    }

    const todoObj = (todoContent) => {
        return {
            id: Math.floor(Math.random() * 1000000),
            todoContent,
            complete: false
        }
    }

    const value = {
        todo: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}
export const useTodoContext = () => useContext(TodoContext) 