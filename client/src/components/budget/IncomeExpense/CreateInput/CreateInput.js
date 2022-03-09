import React, { useState } from 'react'
import './CreateInput.css'

export default function CreateInput(props) {

    const [input, setInput] = useState({
        category: "",
        amount: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            };
        });
    }

    function submitInput(event) {
        props.onAdd(input);
        setInput({
            category: "",
            amount: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    className="form-control Input-Category"
                    type="text"
                    name="category"
                    onChange={handleChange}
                    value={input.category}
                    placeholder="Full time income"
                />
                <input
                    className="form-control Input-Amount"
                    type="number"
                    onChange={handleChange}
                    value={input.amount}
                    name="amount"
                    placeholder="$70000"
                />
                <button type="button Input-Button" className="btn btn-success" onClick={submitInput}>Add</button>
            </form>
        </div>
    )
}
