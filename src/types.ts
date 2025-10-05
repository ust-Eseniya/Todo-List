export interface Todo {
    id:number;
    text: string;
    completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed'

export interface TodoInputProps {
    onAddTodo: (text: string) => void
}

export interface TodoListProps {
    list: Todo[];
    remove: (todo: Todo) => void;
    toggleComplete: (id: number) => void;
}

export interface TodoFilterProps {
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
    todos: Todo[];
    onClearCompleted: () => void;
}

export interface TodoStatsProps {
    todos: Todo[];
}