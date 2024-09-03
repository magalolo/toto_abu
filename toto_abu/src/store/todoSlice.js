import {createSlice} from '@reduxjs/toolkit';

const todoList = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action){
            state.todos.push({
                completed: false,
                important: false,
                correct: false,
                id: Math.random(),
                text: action.payload.text,
            })
        },
        removeTodo(state, action){
           state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        setKey(state, action){
            const setKey = state.todos.find(todo => todo.id === action.payload.id);
            setKey.completed = !setKey.completed;
        },
        setCorrect(state, action){
            console.log(action);
            
            const setCorrect = state.todos.find(todo => todo.id === action.payload.id);
            setCorrect.correct = !setCorrect.correct;
        },
        editText(state, action){
            console.log(action);
            
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)

            const setCorrect = state.todos.find(todo => todo.id === action.payload.id);
            setCorrect.correct = !setCorrect.correct;
        }
    },
})

export const {addTodo, removeTodo, setKey, setCorrect, editText} = todoList.actions;

export default todoList.reducer;