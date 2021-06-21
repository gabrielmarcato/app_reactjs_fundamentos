import './Card.css'
import React from 'react'

export default function Card(props) {

    const estilo = {
        backgroundColor: props.color || '#2979ff',
        borderColor: props.color || '#2979ff'
    }

    return (
        <div className="Card" style={estilo}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}