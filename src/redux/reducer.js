import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
  let newTodo;
  switch (action.type) {
    case ADD_TODO:
      newTodo = [...state];
      newTodo.push(action.payload);
      return newTodo;

    case UPDATE_TODO:
      newTodo = [...state];
      let index = -1;
      for (let i = 0; i < newTodo.length; i++) {
        index++;
        if (newTodo[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodo[index] = action.payload;
        //console.log(newTodos);
        return newTodo;
      }

    case DELETE_TODO:
      let newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
  }
  return state;
};
