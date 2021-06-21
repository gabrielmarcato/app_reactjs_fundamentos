import React from 'react'

export default function Aleatorio(props) {

    const min = Math.ceil(props.min);
    const max = Math.floor(props.max);
    const valor = Math.floor(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>
                <strong>Valor Aleatório é </strong>{ valor }
            </h2>
        </div>
    )

}