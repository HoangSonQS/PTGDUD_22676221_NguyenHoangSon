import { useState } from "react"
export default function App() {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    var newArray = todos.map((item, index) => {
        return <li key={index}>{item}
        <button onClick={handleDelete}>Delete</button>
        </li>
    })
    function handleDelete(e) {
        var index = e.target.value
        todos.splice(index, 1)
        console.log(todos)
        setTodos([...todos])
    }


    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleClick() {
        setTodos([...todos, input])
    }

    return (
        <>
        <input type="text" onChange={handleChange} name="" id="" /><br />
        <button onClick={handleClick}>Click</button>
        <ol>
            {newArray}
        </ol>
        </>
    )
}