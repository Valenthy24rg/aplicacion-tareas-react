import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false}) => {
console.log(showCompleted)
  const taskTableRows = (doneValue) => {
    return(
      tasks
      .filter((task) => task.done === doneValue) //filtra las tareas que ya están hechas 
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ))
    )
  }

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  );
};