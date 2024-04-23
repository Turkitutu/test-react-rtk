import React, { useState } from "react";
import {
  useAddTodoMutation,
  useGetTodosQuery,
  useRemoveTodoMutation,
} from "../store/service";
import TodoComponent from "./Todo";

const TodoList: React.FC = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [removeTodo] = useRemoveTodoMutation();

  const [addTodo] = useAddTodoMutation();

  const [newTodo, setNewTodo] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleRemove = (id: string) => {
    removeTodo(id);
  };

  const handleAdd = () => {
    if (newTodo.trim()) {
      addTodo({
        id: String(Date.now()),
        task: newTodo,
        completed: false,
      });

      setNewTodo("");
    }
  };

  return (
    <>
      <div>
        {todos?.map((todo) => (
          <TodoComponent key={todo.id} todo={todo} onRemove={handleRemove} />
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} // Capture the input
          placeholder="Enter new todo"
        />
        <button onClick={handleAdd}>Add Todo</button>{" "}
      </div>
    </>
  );
};

export default TodoList;
