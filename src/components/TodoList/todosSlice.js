// const initState = [
//         {id: 1, name: 'Learn Yoga', completed: false, prioriry: 'Medium'},
//         {id: 2, name: 'Learn Football', completed: true, prioriry: 'High'},
//         {id: 3, name: 'Learn Java', completed: false, prioriry: 'Low'},
//     ]

// const todosReducer = (state = initState, action) => {
//     console.log({state, action} )
//     switch(action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload];
//         case 'todoList/toggleTodoStatus':
//             return state.map((todo) =>
//                 todo.id === action.payload
//                 ? { ...todo, completed: !todo.completed }
//                 : todo
//             );
//         default: return state
//     }
// }

// export default todosReducer;

import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
  ],
  reducers: { // IMMER
    addTodo: (state, action) => {
      state.push(action.payload);
    }, // action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    }
  }
});