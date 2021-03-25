import Task from "./Task";
// catch the props of onToggle and onDelete from the App.js file
const Tasks = ({ tasks,onDelete,onToggle, users}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    
      ))}
    </>
  );
};

export default Tasks;