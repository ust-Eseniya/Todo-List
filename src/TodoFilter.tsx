import React from "react"
import { TodoFilterProps } from "./types"

const TodoFilter = ({
    filter, 
    onFilterChange,
    todos = [],
    onClearCompleted
}: TodoFilterProps) => {
    const activeTodosCount = todos.filter(todo => !todo.completed).length
    const completedTodosCount = todos.filter(todo => todo.completed).length
    const allTodosCount = todos.length

    return (
        <>
        <div className="filters">
            <button
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => onFilterChange('all')}>
                All ({allTodosCount})
            </button>
            <button
            className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => onFilterChange('active')}>
                Active ({activeTodosCount})
            </button>
            <button
            className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => onFilterChange('completed')}>
                Completed ({completedTodosCount})
            </button>
        </div>
            {completedTodosCount > 0 && (
                <div className="clear-completed">
                <button className="clear-completed-btn" onClick={onClearCompleted}>
                    Delete completed tasks
                </button>
            </div>
            )}
        </>
    )
}

export default TodoFilter