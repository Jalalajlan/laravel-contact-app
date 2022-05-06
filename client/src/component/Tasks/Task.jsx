const Task = ({ task }) => {
    return (
        <div className="task-input">
            <p>{task.name}</p>
        </div>
    );
};

export default Task;
