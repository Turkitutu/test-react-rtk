import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./modules/todo/components/TodoList";

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <h1>My App</h1>
      <h2>Todo List</h2>
      <TodoList />
      <h2>Profile List</h2>
      soon
    </div>
  </Provider>
);

export default App;
