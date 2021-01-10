import React from 'react'

function TodoItem() {
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#1</div>
                <div className="col">
                    <h3>Todo Title</h3>
                </div>
                <button className="btn btn-dark m-2">
                Edit
                </button>
                <button className="btn btn-danger m-2">Delete</button>

            </div>
            
        </div>
    )
}

export default TodoItem
