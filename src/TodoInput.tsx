import {useState} from 'react'
import { TodoInputProps } from './types';

const TodoInput = ({ onAddTodo } : TodoInputProps) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleAddTodo = (): void => {
    if (inputValue.trim() !== ''){
        onAddTodo(inputValue)
        setInputValue('')
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            handleAddTodo()
        }
    }
  
    return (
        <div className="add-todo">
            <input className='input-add'
                type="text"
                value={inputValue}
                placeholder="Create a new todo"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}/>
            <button className="add-button" onClick={handleAddTodo}>
                Add
            </button>    
        </div>
    )
}
export default TodoInput