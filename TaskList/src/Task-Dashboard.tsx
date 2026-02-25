import TaskList from './components/TaskList/TaskList'
import { useState } from 'react';
import type { Task } from './types'
import TaskFilter from './components/TaskFilter/TaskFilter'
import type { TaskStatus } from './types'

function TaskDashboard(){


  //Mock tasks and task functions
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

    //Filtering 

  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all" >("all");
  const filteredTasks = tasks.filter(task => {
    if (statusFilter === "all") return true;
    return task.status === statusFilter;
  });

  const handleFilterChange = (filters : {status?: TaskStatus}) => {
    console.log("Clicked:", filters);
    if (!filters.status) {
      setStatusFilter("all");
    } else {
      setStatusFilter(filters.status)
    }
  };
  
  return(
    <div id="Dashboard" style={{border:"2px solid black", width:"600px"}}>
      <h2>Dashboard</h2>
      <TaskFilter onFilterChange={handleFilterChange}></TaskFilter>
      <TaskList tasks={filteredTasks} onStatusChange={()=>{}} onDelete={onDelete}></TaskList>
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

//  const filteredTasks = tasks.filter(task => {
//     if (statusFilter === "all") return true;
//     return task.status === statusFilter;
// <div id="filterBtns">
//   <button className = "filter" id = "all" onClick = {() => setStatusFilter("all")}>All</button>
//   <button className = "filter" id = "pending" onClick = {() => setStatusFilter("pending")}>Pending</button>
//   <button className = "filter" id = "inProgress" onClick = {() => setStatusFilter("in-progress")}>In-Progress</button>
//   <button className = "filter" id = "completed" onClick = {() => setStatusFilter("completed")}>Completed</button>
// </div>