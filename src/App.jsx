import './App.css'
import React from 'react'

import ComponentOne from './components/basicos/ComponentOne'
import ComponentTwo from './components/basicos/ComponentTwo'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import IfElse from './components/condicional/if'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            
            <div className="Cards">

                <Card titulo="#14 - Mega Sena" color="#795548">
                    <Mega></Mega>
                </Card>

                <Card titulo="#13 - Contador" color="#bf360c">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="#12 - Componente Controlado" color="#e65100">
                    <Input />
                </Card>

                <Card titulo="#11 - Comunicação Indireta" color="#ffb300">
                    <IndiretaPai />
                </Card>

                <Card titulo="#10 - Comunicação Direta" color="#cddc39">
                    <DiretaPai text="Text" number={10} bool={true} />
                </Card>

                <Card titulo="#9 - Condicional 2" color="#8bc34a">
                    <IfElse test={true}>
                        <span>TESTE</span>
                    </IfElse>
                </Card>

                <Card titulo="#8 - Condicional 1" color="#4caf50">
                    <ParOuImpar numero={20} />
                </Card>

                <Card titulo="#7 - Lista Produtos" color="#009688">
                    <ListaProdutos />
                </Card>

                <Card titulo="#6 - Lista Alunos" color="#00bcd4">
                    <ListaAlunos />
                </Card>

                <Card titulo="#5 - Componente com filhos" color="#039be5">
                    <Familia sobrenome="Marcato">
                        <FamiliaMembro nome="Gabriel" />
                        <FamiliaMembro nome="Matheus" />
                        <FamiliaMembro nome="Miguel" />
                    </Familia>
                </Card>
                
                <Card titulo="#4 - Valores Aleatórios" color="#e53935">
                    <Aleatorio min={1} max={11} />
                </Card>

                <Card titulo="#3 - Fragmento" color="#9c27b0">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Valores por paramentro" color="#673ab7">
                    <ComponentTwo titulo="Segundo" subtitulo="Componente" />
                </Card>

                <Card titulo="#1 - Componente simples" color="#3f51b5">
                    <ComponentOne></ComponentOne>
                </Card>
            </div>

        </div>
    )
}