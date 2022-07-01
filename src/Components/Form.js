import React, { useEffect } from 'react'
import '../App.css'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id } : todo
        )
        setTodos(newTodo)
        setEditTodo('')
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        }
        else {
            setInput('')
        }

    }, [setInput, editTodo]);
    const onInputchange = (e) => {
        setInput(e.target.value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input }])
            setInput('')
        } else {
            updateTodo(input, editTodo.id)
        }


    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' placeholder='Enter a todo..' className='text-input' value={input} required onChange={onInputchange} />
            <button className='button-add' type='submit'>
                Add
            </button>
        </form>
    )
}
export default Form