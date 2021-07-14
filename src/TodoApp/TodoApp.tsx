import React, { useState } from "react";
import "./TodoApp.css";

import { TodoItem } from "../TodoItem/TodoItem";

type TodoItemType = {
  todo: string;
  done: boolean;
  index: number;
};

const TodoApp = () => {
  const [items, setItems] = useState<any[]>([]);
  const [entry, setEntry] = useState("");

  const onSubmit = (e: any) => {
    const newItem: TodoItemType = {
      todo: entry,
      done: false,
      index: items.length,
    };

    setItems([...items, newItem]);
    setEntry("");

    e.preventDefault();
    return false;
  };

  const onTodoChange = (index: number, value: boolean) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, done: value } : item))
    );
  };

  return (
    <div className="Todo">
      <h1>Todo</h1>

      <ul>
        {items.map((item, i) => (
          <TodoItem {...item} index={i} onChange={onTodoChange} />
        ))}
      </ul>

      <div className="Todo-entry">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="I need to..."
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export { TodoApp };
