import { useContext } from 'react'
import { Context } from '../../../Context/Context'
import Transations from './Transations'

const Create = () => {

    const { inputref, selectref, createTrans } = useContext(Context)
    return (
        <div>
            <p>Nova transação:</p>
            <input type="number" ref={inputref} placeholder="Valor..." className="border"/>
            <select ref={selectref}>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
            </select>
            <button onClick={createTrans}>Criar</button>
            <Transations/>
        </div>
    )
}

export default Create