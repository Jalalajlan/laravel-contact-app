import "./App.css";
import Form from "./component/Form/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import Tasks from "./component/Tasks/Tasks";

function App() {
    const [item, setItem] = useState({
        name: "",
    });
    const [isPending, setIsPending] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (item.name === "") alert("please enter valid data");
        else {
            setIsPending(true);
            axios
                .post("http://localhost:8000/api/item/store", {
                    item: {
                        name: item.name,
                    },
                })
                .then((res) => {
                    setIsPending(false);
                    setItem({ ...item, name: "" });
                    tasks.push(res.data);
                    setTasks(tasks);
                });
        }
    };

    useEffect(() => {
        async function fetchTasks() {
            const result = await axios("http://localhost:8000/api/items");
            setLoading(true);
            setTasks(result.data);
        }
        fetchTasks();
    }, []);

    const deleteTask = async (id) => {
        const { status } = await axios.delete(
            `http://localhost:8000/api/item/${id}`
        );
        if (status === 200) {
            const newTodos = tasks.filter((task) => task.id !== id);
            setTasks(newTodos);
        }
    };

    const updateTask = async (id, completed) => {
        const { status, data } = await axios.put(
            `http://localhost:8000/api/item/${id}`,
            { item: { completed: completed } }
        );
        if (status === 200) {
            const newTodos = tasks.map((task) =>
                task.id === data.id ? data : task
            );
            setTasks(newTodos);
        }
    };

    return (
        <div className="App">
            <Form
                item={item}
                setItem={setItem}
                isPending={isPending}
                handleSubmit={handleSubmit}
            />
            <Tasks
                tasks={tasks}
                loading={loading}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />
        </div>
    );
}

export default App;
