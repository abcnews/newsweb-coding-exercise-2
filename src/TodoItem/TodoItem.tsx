import React from "react";
import "./TodoItem.css";

type TodoItemProps = {
  todo: string;
  done: boolean;
  index: number;
  onChange: Function;
};

const TodoItem = (props: TodoItemProps) => {
  const onChange = (e: any) => {
    props.onChange(props.index, e.target.checked);
  };

  return (
    <li className={props.done ? "done" : "todo"}>
      <input type="checkbox" checked={props.done} onChange={onChange} />{" "}
      {props.todo}
    </li>
  );
};

export { TodoItem };
export type { TodoItemProps };
