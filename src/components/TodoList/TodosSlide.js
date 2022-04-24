const initState = [
        {id: 1, name: 'Learn Yoga', completed: false, prioriry: 'Medium'},
        {id: 2, name: 'Learn Football', completed: true, prioriry: 'High'},
        {id: 3, name: 'Learn Java', completed: false, prioriry: 'Low'},
    ]

const todosReducer = (state = initState, action) => {
    console.log({state, action} )
    switch(action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];
        case 'todoList/toggleTodoStatus':
            return state.map((todo) =>
                todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo
            );
        default: return state
    }
}

export default todosReducer;