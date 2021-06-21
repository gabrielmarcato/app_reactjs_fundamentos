import React from 'react'

export default function ComponentTwo(params) {
    return (
        <div>
            <h2>Titulo: {params.titulo}</h2>
            <h2>subTitulo: {params.subtitulo}</h2>
        </div>
    )
}