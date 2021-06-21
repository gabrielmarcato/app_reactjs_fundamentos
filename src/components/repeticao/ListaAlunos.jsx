import './ListaAlunos.css'
import React from 'react'
import alunos from '../../data/alunos'

export default function ListaAlunos(props) {
    const lista = alunos.map(aluno => {
        return <li key={aluno.id}>({aluno.id}) {aluno.nome} = {aluno.nota}</li>
    })

    return (
        <div className="ListaAlunos">
            <ul>
                {lista}
            </ul>
        </div>
    )
}