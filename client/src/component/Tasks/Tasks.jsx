import "./Task.css";
import Task from "./Task";

const Tasks = ({ tasks, loading }) => {
    if (!loading) return <p>loading ...</p>;
    return (
        <div className="tasks-container">
            {tasks.length ? (
                tasks.map((task) => <Task key={task.id} task={task} />)
            ) : (
                <p>there is no tasks</p>
            )}
        </div>
    );
};

export default Tasks;
