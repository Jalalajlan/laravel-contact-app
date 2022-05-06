import "./Task.css";
import Task from "./Task";

const Tasks = ({ tasks, loading, deleteTask, updateTask }) => {
    if (!loading) return <p className="whiteBg">loading ...</p>;
    return (
        <div className="tasks-container">
            {tasks.length ? (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        taskId={task.id}
                        taskName={task.name}
                        taskCompleted={task.completed}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                ))
            ) : (
                <p className="whiteBg">there is no tasks</p>
            )}
        </div>
    );
};

export default Tasks;
