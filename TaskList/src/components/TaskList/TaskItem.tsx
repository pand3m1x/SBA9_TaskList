

//  id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
//
function TaskItem(){

  return(
    <li style={{border:"2px solid blue"}}>
      <p className="taskItem">task title</p>
      <p className="taskItem">description</p>
      <p className="taskItem">due</p>
      <select>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button>Delete</button>
    </li>
  )
}

export default TaskItem