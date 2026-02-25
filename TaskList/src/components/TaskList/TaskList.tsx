// import type { Task } from '../../types'
import type { TaskListProps } from '../../types'
import TaskItem from './TaskItem'

function TaskList({ tasks, onStatusChange, onDelete } : TaskListProps){


  return(
    <>
      <h3>TaskList</h3>
      <ul>
        {tasks.map(task => (
        <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete}></TaskItem>))}
      </ul>
    </>
  )
}

export default TaskList

// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }