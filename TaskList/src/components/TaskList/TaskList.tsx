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

// Implement list rendering with proper key management [x]
// Handle task status updates []
// Implement task addition [x]
// Implement task deletion [x]
// Add sorting functionality [x] // isn't this in the Dashboard?
// Add a search bar to search for tasks []