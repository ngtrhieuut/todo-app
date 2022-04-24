const initState = {
    search: '',
    status: "All",
    priority: [],
}

const filtersReducer = (state = initState, action) => {
    console.log({state, action} )
    switch(action.type) {

        case 'todoList/searchText':
            return {
                ...state,
                search: action.payload,
            }

        case 'todoList/statusFiltersChange':
            return {
                ...state,
                status: action.payload,
            }

        case 'todoList/prioriryFilterChange':
            return {
                ...state,
                priority: action.payload,
            }
        default: return state
    }
}

export default filtersReducer;