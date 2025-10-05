import { TodoListProps } from "./types";
const TodoList = ({ list, remove, toggleComplete }: TodoListProps) => {
    return (
        <>
            {list?.length > 0 ? (
                <ul className="todo-list">
                    {list.map((entry) => (
                        <div 
                            key={entry.id}
                            className={`todo ${entry.completed ? 'completed' : ''}`}>
                            <input 
                                className="chekbox" 
                                type="checkbox"
                                checked={entry.completed || false}
                                onChange={() => toggleComplete(entry.id)}/>
                            <li className={entry.completed ? 'completed-text' : ''}>
                                {entry.text}
                            </li>
                            <button 
                            className="delete-button"
                            onClick={() => {remove(entry);}}>
                                Delete
                            </button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </>
    );
};

export default TodoList