import type { TaskItemProps, TaskStatus } from '../../types/index';


function TaskItem({ task, onStatusChange, onDelete}:TaskItemProps){

  return(
    <li style={{border:"2px solid blue"}}>
      <h4 className="taskItem">{task.title}</h4>
      <p className="taskItem">{task.description}</p>
      <p className="taskItem">{task.dueDate}</p>
      <select value={task.status} onChange={(e) => onStatusChange(task.id,e.target.value as TaskStatus)}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem

//  id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
//