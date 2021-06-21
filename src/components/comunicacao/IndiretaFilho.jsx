import React from 'react'

export default function IndiretaFilho(props) {
    return (
        <div>
            <button onClick={_ => props.btnclick('Gabriel', 24, true)}>Fornecer informações</button>
        </div>
    )
}