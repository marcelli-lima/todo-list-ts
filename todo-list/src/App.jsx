import styles from "./App.module.css";
import "./App.css";
import { Header } from "./components/Header";
import Clipboard from "./assets/Clipboard.svg";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Tasks } from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

const NoTasks = () => {
  return (
    <div className={styles.initial}>
      <img src={Clipboard} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
};

function App() {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function createTask() {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: task,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  }

  function handleCompletedTasks() {
    let count = 0;
    tasks.filter((task) => {
      if (task.isCompleted === true) {
        count++;
      }
    });
    setCompletedTasks(count);
  }

  function changeIsComplete(id) {
    tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
    });
    handleCompletedTasks();
  }

  function deleteTask(id) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    tasks.map((task) => {
      if (task.id === id && task.isCompleted === true) {
        changeIsComplete(id);
      }
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <form onSubmit={createTask} className={styles.formTask}>
        <input
          value={task}
          onChange={() => setTask(event.target.value)}
          className={styles.inputTask}
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.addTask}>
          Criar <PlusCircle />
        </button>
      </form>
      <div className={styles.status}>
        <div className={styles.statusCounter}>
          <p className={styles.createTasks}>
            Tarefas criadas{" "}
            <span className={styles.counterOne}>{tasks.length}</span>
          </p>
        </div>
        <div className={styles.statusCounter}>
          <p className={styles.finished}>
            Concluídas{" "}
            <span className={styles.counterTwo}>
              {completedTasks} de {tasks.length}
            </span>
          </p>
        </div>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Tasks
            key={task.id}
            title={task.title}
            id={task.id}
            deleteTask={deleteTask}
            onChangeIsComplete={changeIsComplete}
            isCompleted={task.isCompleted}
          />
        ))
      ) : (
        <NoTasks />
      )}
    </div>
  );
}

export default App;
