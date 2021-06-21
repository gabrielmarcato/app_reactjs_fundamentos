import './ListaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default function ListaProdutos(props) {
    return (
        <table className="TabelaProdutos">
            <tr>
                <th><strong>ID</strong></th>
                <th><strong>Produto</strong></th>
                <th><strong>Preço</strong></th>
            </tr>
            {
                produtos.map(produto => {
                    return <tr className={produto.id % 2 === 0 ? 'par' : ''} key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.produto}</td>
                                <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                            </tr>
                })
            }
        </table>
    )
}