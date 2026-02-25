

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
    </li>
  )
}

export default TaskItem