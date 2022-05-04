import "./form.css";

const Form = ({ handleSubmit, isPending, item, setItem }) => {
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Add Task</h1>
                <input
                    type="text"
                    value={item.name}
                    onChange={(e) => setItem({ ...item, name: e.target.value })}
                />
                {!isPending && <button type="submit">Add todo</button>}
                {isPending && (
                    <button type="submit" disabled>
                        Adding...
                    </button>
                )}
            </form>
        </div>
    );
};

export default Form;
