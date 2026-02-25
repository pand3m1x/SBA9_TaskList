import type { TaskFilterProps } from "../../types";

function TaskFilter({ onFilterChange } : TaskFilterProps){
  
  return(
    <>
      <h3>Filter</h3>
        <div id="filterBtns">
          <button className = "filter" id = "all" onClick = {() => onFilterChange({ status : undefined })}>All</button>
          <button className = "filter" id = "pending" onClick = {() => onFilterChange({ status : "pending" })}>Pending</button>
          <button className = "filter" id = "inProgress" onClick = {() => onFilterChange({ status : "in-progress" })}>In-Progress</button>
          <button className = "filter" id = "completed" onClick = {() => onFilterChange({ status : "completed" })}>Completed</button>
        </div>
    </>
  );
}

export default TaskFilter

// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }
// export type TaskStatus = 'pending' | 'in-progress' | 'completed'; //so because there isn't an 'all' TaskStatus it is undefined? 
//                                                                                            Or can I add 'all to the typescript?



     // <div id="filterBtns">
    //   <button className="filter" id="all">All</button>
    //   <button className="filter" id="pending">Pending</button>
    //   <button className="filter" id="inProgress">In-Progress</button>
    //   <button className="filter" id="completed">Completed</button>
    // </div>