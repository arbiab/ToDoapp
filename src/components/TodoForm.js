import React from 'react'
import { useState } from 'react'
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (value === '') {
      setError('Please enter a task')
      return
    }
    await addTodo(value)
    setValue('')
    setError('')
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task for today?"
        onChange={(e) => {
          setValue(e.target.value)
          setError('')
        }}
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  )
}
export default TodoForm
