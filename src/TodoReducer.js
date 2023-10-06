export const initState = {
    todos: []
}

export const ACTIONS = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
    DELETE_TODO: "DELETE_TODO"
}
//初始值是{todo:[]}，故下面都會使用解構把todos改掉的方法
//reducer需傳入兩個參數，一是state，二是要執行的action，用來改變reducer的state
const TodoReducer = (state, action) => {
    const { type, payload } = action
    console.log(state, type, payload)
    switch (type) {
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                todos: payload.todo
            }
        case ACTIONS.TOGGLE_TODO:
            return {
                ...state,
                todos: payload.todo
            }
        case ACTIONS.DELETE_TODO:
            return {
                ...state,
                todos: payload.todo
            }
        default:
            return state
    }
}

export default TodoReducer