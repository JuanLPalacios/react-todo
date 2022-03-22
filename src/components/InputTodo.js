import React, { useState } from "react"

function InputTodo(props) {
    const [state, setState] = useState({
        title: "",
    });
    const onChange = e => {
        setState({
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (state.title.trim()) {
            props.addTodoProps(state.title)
            setState({
                title: "",
            })
        } else {
            alert("Please write item")
        }
    };
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add todo..."
                value={state.title}
                name="title"
                onChange={onChange}
            />
            <button className="input-submit">Submit</button>
        </form>
    )
}
export default InputTodo