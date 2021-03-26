import { FaTimes } from "react-icons/fa";
// ON THE DIV BUTTON PASS IN onToggle prop since the toggle needs to happen on the task div
const Task = ({ task, onDelete,onToggle,onAdds }) => {
    return (
      <div
        className={`task ${task.owns ? "owns" : ""}`}
        onDoubleClick={() => onToggle(task.id)}
      >
        <h3>
          Designer Name: {task.Name}
          <FaTimes
            style={{ color: "pink", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </h3>
        <h3>
        Designer Wish Item: {task.FamousFor}
        </h3>
        <h5>Designer Origin: {task.Origin}</h5>
        {/* <onAdds onClick={() => onAdds(task.Name)} /> */}
      </div>
    );
};

export default Task;