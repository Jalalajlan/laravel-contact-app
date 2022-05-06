import DeleteIcon from "../../images/deleteIcon.svg";

const Task = ({ taskId, taskName, deleteTask, updateTask, taskCompleted }) => {
    return (
        <div className="task-info">
            <img
                src={DeleteIcon}
                width="20px"
                height="20px"
                alt="delete icon"
                onClick={() => deleteTask(taskId)}
            />
            <input
                type="checkbox"
                name="completed"
                onClick={() => updateTask(taskId, !taskCompleted)}
                checked={taskCompleted}
            />
            <p className={taskCompleted ? "dashed" : ""}>{taskName}</p>
        </div>
    );
};

export default Task;
