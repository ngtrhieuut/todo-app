import {combineReducers  } from 'redux';

import filtersReducer from "../components/Filters/FiltersSlide";
import todosReducer from "../components/TodoList/TodosSlide";

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todosReducer,
  });
  
  export default rootReducer;