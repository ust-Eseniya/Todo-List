import React from "react";
import { TodoStatsProps } from "./types";

const TodoStats = ({ todos = [] }: TodoStatsProps) => {
    const activeTodosCount = todos.filter(todo => !todo.completed).length;
    const completedTodosCount = todos.filter(todo => todo.completed).length;    
    const allTodosCount = todos.length;    

    return (
        <div className="stats">
            <p>All: {allTodosCount} | Active: {activeTodosCount} | Completed: {completedTodosCount}</p>
        </div>
    )
}

export default TodoStats