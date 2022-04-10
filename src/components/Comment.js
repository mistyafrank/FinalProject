import React from 'react'

function Comment({name, content}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Comment;