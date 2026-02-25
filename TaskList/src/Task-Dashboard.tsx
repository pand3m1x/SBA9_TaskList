import TaskItem from './components/TaskList/TaskItem'
import { useState } from 'react';
import type { Task, TaskStatus } from './types'

function TaskDashboard(){


  const mockTask : Task ={
    id: "1",
    title: "Mock",
    description: "Mocking",
    status: "pending",
    priority: "high",
    dueDate: "2026-25-02",
  }

  const [tasks] = useState<Task[]>([mockTask]);

  const onDelete = (taskId : string) =>{
    console.log("deleted:", taskId);
  }
  
  return(
    <div style={{border:"2px solid black", width:"600px"}}>
      <TaskItem task={mockTask} onStatusChange={()=>{}} onDelete={onDelete}></TaskItem>
    </div>
  );
}

export default TaskDashboard
//  id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
//

// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }