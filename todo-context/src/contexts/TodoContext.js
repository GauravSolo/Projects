import { createContext, useContext } from "react";

// context
export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo: "Todo Msg",
            completed: false,
        },
        {
            id : 2,
            todo: "Todo Msg 2",
            completed: false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});

// custom hooks
export const useTodo = () => {
    return useContext(TodoContext);
}

// provider
export const TodoProvider = TodoContext.Provider;

