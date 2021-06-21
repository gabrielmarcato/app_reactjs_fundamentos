import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default function IndiretaPai(props) {

    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function fornecerInfo(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <div>{nome}</div>
                <div>{idade}</div>
                <div>{nerd ? 'Verdadeiro' : 'Falso'}</div>
            </div>
            <IndiretaFilho btnclick={fornecerInfo} />
        </div>
    )
}