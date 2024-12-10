export interface IProps {
  title: string;
  id: number;
  isDone: boolean;
  handleDoneTodo?: () => void;
}

export enum EStatus {
  All = "all",
  Active = "active",
  Completed = "completed",
}

export interface IFilters {
  leftCount: number;
  filter: EStatus;
  setFilter: (status: EStatus) => void;
  handleClearCompleted: () => void;
}
