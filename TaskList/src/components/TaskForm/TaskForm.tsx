import type { TaskFormProps } from "../../types"
import type { TaskStatus } from "../../types";
import type { Task } from "../../types"
import { useState } from 'react'

function TaskForm({ onAddTask } : TaskFormProps){
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<TaskStatus>("pending");
  const [description, setDescription] = useState("");

  const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask : Task = {
      id:crypto.randomUUID(),
      title: title,
      description: description,
      status: status,
      priority: "low",
      dueDate: new Date().toISOString().split("T")[0],

    };

    onAddTask(newTask);
    setTitle("")
  }

  return(

    <div style={{border:"2px solid green"}} id="taskInput">
      <h3>Task Input</h3>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="task title" style={{width:"100px", marginBottom:"2px"}}/>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} 
                  placeholder="task description" style={{width:"300px", height:"20px", marginBottom:"0px"}}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TaskForm

//  id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;

// Create a controlled form for adding/editing tasks
// Implement form validation
// Handle form submission
// Show validation feedback