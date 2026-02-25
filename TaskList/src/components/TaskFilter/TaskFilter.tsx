

function TaskFilter(){

  return(

    <> 
    <h3>Filter</h3>
    <div id="filterBtns">
      <button className="filter" id="all">All</button>
      <button className="filter" id="pending">Pending</button>
      <button className="filter" id="inProgress">In-Progress</button>
      <button className="filter" id="completed">Completed</button>
    </div>
    </>
  )
}

export default TaskFilter

// export type TaskStatus = 'pending' | 'in-progress' | 'completed';