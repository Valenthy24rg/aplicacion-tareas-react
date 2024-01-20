export const TaskRow = ({task, toggleTask}) => {
  return (
    <tr key={task.name}>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          value={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
