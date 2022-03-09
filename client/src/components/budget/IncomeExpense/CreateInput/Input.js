import React, {useState} from 'react';
import './CreateInput.css'

export default function Input(props) {

    function handleDelete(event) {
        props.onDelete(props.id)
        event.preventDefault();
    }

    return (
        <div>
            <input
                className="form-control Input-Category"
                name="category"
                value={props.category}
                readOnly
            />
            <input
                className="form-control Input-Amount"
                name="amount"
                value={props.amount}
                readOnly
            />
            <button type="button Input-Button" className="btn btn-danger" onClick={handleDelete}>-</button>
        </div>
    );
}
