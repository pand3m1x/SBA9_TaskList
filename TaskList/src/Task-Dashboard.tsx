import TaskList from './components/TaskList/TaskList'
import { useState } from 'react';
import type { Task } from './types'

function TaskDashboard(){


  const mockTask1 : Task = {
    id: "1",
    title: "Mock",
    description: "Mocking",
    status: "pending",
    priority: "high",
    dueDate: "2026-25-02",
  };
  const mockTask2 : Task = {
    id: "2",
    title: "Mock 2",
    description: "Mocking 2",
    status: "in-progress",
    priority: "medium",
    dueDate: "2026-28-02",
  };
  const mockTask3 : Task = {
    id: "3",
    title: "Mock 3",
    description: "Mocking 3",
    status: "completed",
    priority: "low",
    dueDate: "2026-05-02",
  }

  const [tasks] = useState<Task[]>([mockTask1, mockTask2, mockTask3]);

  const onDelete = (taskId : string) =>{
    console.log("deleted:", taskId);
  }
  
  return(
    <div id="Dashboard" style={{border:"2px solid black", width:"600px"}}>
      <TaskList tasks={tasks} onStatusChange={()=>{}} onDelete={onDelete}></TaskList>
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