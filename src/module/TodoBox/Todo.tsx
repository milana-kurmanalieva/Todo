import { useEffect, useState } from "react";
import { TodoItem } from "../components/TodoItem/TodoItem";
import classes from "./Todo.module.scss";
import { EStatus, IProps } from "../types";
import { TodoFilters } from "../components/TodoFilters/TodoFilters";

export const Todo = () => {
  const [todos, setTodos] = useState<IProps[]>([]);
  const [text, setText] = useState("");
  const [leftCount, setLeftCount] = useState(0);
  const [filter, setFilter] = useState<EStatus>(EStatus.All);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { title: text.trim(), id: Date.now(), isDone: false },
    ]);
    setText("");
  };

  const handleDoneTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isDone));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isDone;
    if (filter === "completed") return todo.isDone;
    return true;
  });

  useEffect(() => {
    const count = todos.filter((todo) => !todo.isDone).length;
    setLeftCount(count);
  }, [todos]);

  return (
    <div className={classes.todoList}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <h1>todos</h1>
          <input
            type="text"
            onChange={handleChange}
            value={text}
            placeholder="What needs to be done?"
            id="todo"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={classes.arrowIcon}
          >
            <path d="M6 8l6 8 6-8" />
          </svg>
        </label>
        <div>
          <div className={classes.todoItems}>
            {filteredTodos.map((todo) => (
              <TodoItem
                title={todo.title}
                isDone={todo.isDone}
                id={todo.id}
                handleDoneTodo={() => handleDoneTodo(todo.id)}
                key={todo.id}
              />
            ))}
          </div>
          <TodoFilters
            filter={filter}
            leftCount={leftCount}
            setFilter={setFilter}
            handleClearCompleted={handleClearCompleted}
          />
        </div>
      </form>
    </div>
  );
};
