import { createSlice } from '@reduxjs/toolkit'

// const [todoList, setTodoList] = useState([])
// setTodoList(action)
const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },

        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                  if (item.done === true) {
                      item.done = false
                  } else  {
                      item.done = true
                  }
                }
            })
        },
        
        setRemove: (state, action) => {
            const index = state.todoList.findIndex((todo) => todo === action.payload);
            state.todoList.splice(index, 1);
        }
    }
});

export const { saveTodo, setCheck, setRemove } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer