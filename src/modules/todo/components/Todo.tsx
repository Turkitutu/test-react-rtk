import React from "react";
import { Todo } from "../shared/types";

interface TodoProps {
  todo: Todo;
  onRemove: (id: string) => void;
}

const TodoComponent: React.FC<TodoProps> = ({ todo, onRemove }) => (
  <div style={{ marginTop: 10 }}>
    <span style={{ marginRight: 20 }}>{todo.task}</span>
    <button onClick={() => onRemove(todo.id)}>Remove</button>
  </div>
);

export default TodoComponent;
