import { useState, useEffect } from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import TodoFilter from "./TodoFilter"
import TodoStats from "./TodoStats"
import { Todo, FilterType } from "./types"
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<FilterType>('all')

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        const parsedTodos: Todo[] = JSON.parse(savedTodos);
        setTodos(parsedTodos);
      } catch (error) {
        console.error('Error parsing todos from localStorage: ', error);
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string): void => {
    if (text.trim() !== ''){  
        const newTodo = {
          id: Date.now(),
          text: text,
          completed: false
        };
      setTodos([...todos, newTodo])
    }
  }

  const removeTodo = (todoToRemove: Todo): void => {
    setTodos(todos.filter(todo => todo.text !== todoToRemove.text))
  }

  const toggleComplete = (id:number): void => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo)
    setTodos(updatedTodos)
  }

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed
      case 'completed':
        return todo.completed
      default:
        return true
    }
  })

  const clearCompleted = (): void => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Todo List</h1>
      <TodoInput onAddTodo={addTodo}/>
      <TodoFilter filter={filter} onFilterChange={setFilter} todos={todos} onClearCompleted={clearCompleted}/>
      <TodoList list={filteredTodos} remove={removeTodo} toggleComplete={toggleComplete}/>
      <TodoStats todos={todos}/>
      </div>
    </div>
  )
}

export default App