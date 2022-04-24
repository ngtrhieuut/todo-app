export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
      type: 'todoList/toggleTodoStatus',
      payload: todoId,
    };
  };

export const searchText = (text) => {
    return {
        type: 'todoList/searchText',
        payload: text,
    }
}

export const statusFiltersChange = (status) => {
    return {
        type: 'todoList/statusFiltersChange',
        payload: status,
    }
}

export const prioriryFilterChange = (priority) => {
    return {
        type: 'todoList/prioriryFilterChange',
        payload: priority,
    }
}