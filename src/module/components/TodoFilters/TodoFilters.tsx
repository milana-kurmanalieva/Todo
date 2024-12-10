import { EStatus, IFilters } from "../../types";
import classes from "./TodoFilters.module.scss";

export const TodoFilters = (props: IFilters) => {
  const { leftCount, filter, setFilter, handleClearCompleted } = props;
  return (
    <div className={classes.todoFilter}>
      <p>{leftCount} items left</p>
      <div className={classes.todoFilterItems}>
        <p
          className={filter === "all" ? classes.activeFilter : ""}
          onClick={() => setFilter(EStatus.All)}
        >
          All
        </p>
        <p
          className={filter === "active" ? classes.activeFilter : ""}
          onClick={() => setFilter(EStatus.Active)}
        >
          Active
        </p>
        <p
          className={filter === "completed" ? classes.activeFilter : ""}
          onClick={() => setFilter(EStatus.Completed)}
        >
          Completed
        </p>
      </div>
      <p onClick={handleClearCompleted}>Clear completed</p>
    </div>
  );
};
