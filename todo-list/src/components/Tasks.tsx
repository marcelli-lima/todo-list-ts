import { Trash } from "phosphor-react";
import React from "react";
import styles from "./Tasks.module.css";

export function Tasks({
  title,
  id,
  deleteTask,
  onChangeIsComplete,
  isCompleted,
}) {
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
