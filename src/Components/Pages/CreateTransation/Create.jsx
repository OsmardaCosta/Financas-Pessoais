import { useContext } from 'react'
import { Context } from '../../Context/Context'


const Create = () => {

    const { inputref, selectref, createTrans } = useContext(Context)
    return (
        <div>
            <p>Nova transação:</p>
            <input type="number" ref={inputref} placeholder="Valor..." className="border " />
            <select name="" ref={selectref} id="">
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
            </select>
            <button onClick={createTrans}>Criar</button>

        </div>
    )
}

export default Create