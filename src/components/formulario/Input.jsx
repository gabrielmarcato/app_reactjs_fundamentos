import React, {useState} from 'react'

export default (props) => {

    const [valor, setValor] = useState('inicial')

    function ChangeInput(e) {

        const {value} = e.target;

        setValor(value)
    }

    return (
        <div className="group-input">
            <input type="text" value={valor} onChange={ChangeInput} />
            <input type="text" value={valor} readOnly />
            <input type="text" value={undefined} />
        </div>
    )
}