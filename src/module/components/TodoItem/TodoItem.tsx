import { IProps } from "../../types";
import classes from "./TodoItem.module.scss";

export const TodoItem = (props: IProps) => {
  const { title, isDone, handleDoneTodo } = props;

  return (
    <div className={classes.todoItem} onClick={handleDoneTodo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="37"
        viewBox="0 0 108 108"
      >
        <circle
          cx="54"
          cy="54"
          r="52"
          fill="none"
          stroke={isDone ? "#157015" : "#d3d3d3"}
          strokeWidth="4"
        />
        {isDone && (
          <path
            d="M34 54l14 14 26-26"
            fill="none"
            stroke="#157015"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
      <p style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {title}
      </p>
    </div>
  );
};
