import React from 'react'


const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const deleteTodoList = ( id ) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const editTodoList = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }
    return (
        <div>
            {todos.map((todo => (
                <li className='list-item' key={todo.id}>
                    <input type='text' value={todo.title} className='list' onChange={(e) => e.preventDefault()} />
                    <div>
                        <button className="button-edit task-button" onClick={() => editTodoList(todo)}>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => deleteTodoList(todo.id)}>
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            )))}

        </div>
    )
}

export default TodosList