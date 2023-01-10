import { Trash } from "phosphor-react";
import React from "react";
import styles from "./Tasks.module.css";

interface TodosProps {
  id: string;
  title: string;
  isCompleted: Boolean;
  onChangeIsComplete: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Tasks({
  title,
  id,
  deleteTask,
  onChangeIsComplete,
  isCompleted,
}: TodosProps) {
  console.log(isCompleted);

  function handleDeleteTask() {
    deleteTask(id);
  }

  function handleChangeIsComplete() {
    onChangeIsComplete(id);
  }
  return (
    <div>
      <ul className={styles.tasks}>
        <li key={id} className={styles.eachTask}>
          <input
            onClick={handleChangeIsComplete}
            type="checkbox"
            name="checkbox"
          />
          <p>{title}</p>
          <button onClick={handleDeleteTask}>
            <Trash size={24} />
          </button>
        </li>
      </ul>
    </div>
  );
}
