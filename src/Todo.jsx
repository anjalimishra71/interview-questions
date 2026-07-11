import React, { useState } from 'react'

function Todo() {
    let [form, setForm] = useState({ title: '', desc: '' })
    let [todo, setTodo] = useState([])
    let [editedId, setEditedId] = useState(null)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editedId) {
            const updatedTodo = todo.map(curr => {
                return curr.id === editedId ? { ...curr, title: form.title, desc: form.desc } : curr
            })
            setTodo(updatedTodo)
            setEditedId(null)
        } else {
            let newTodo = {
                id: Date.now(),
                title: form.title,
                desc: form.desc
            }
            setTodo([...todo, newTodo])
        }

        setForm({ title: "", desc: "" })
    }

    const handledelete = (id) => {
        let con = window.confirm("Do you want to delete..");
        if (con) {
            const deleteTodo = todo.filter(curr => curr.id != id)
            setTodo(deleteTodo);
        }
    }

    const handleEdit = (id) => {
        setEditedId(id)
        const editTodo = todo.find((currElem) => {
            return currElem.id === id
        })
        setForm(editTodo);
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                Enter Title: <input type="text" name='title' value={form.title} placeholder='Enter your title' onChange={handleChange} /><br /><br />
                Enetr Descreption: <input type="text" name='desc' value={form.desc} placeholder='Enter your desc' onChange={handleChange} /><br />
                <br /><input type="submit" /><hr />

            </form>

            {todo.length > 0 ?
                todo.map(curr => {
                    return (
                        <div key={curr.id}>
                            <p>{curr.title}</p>
                            <p>{curr.desc}</p>
                            <input type="button" value="delete" onClick={() => handledelete(curr.id)} />
                            <input type="button" value="edit" onClick={() => handleEdit(curr.id)} />
                        </div>
                    )
                })
                : <p>no todo</p>
            }
        </div>
    )
}

export default Todo;
