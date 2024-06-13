import { useContext } from "react"
import classNames from "classnames"
import {Context} from '../../Context/Context'
import { FaChevronCircleDown, FaChevronCircleUp} from "react-icons/fa"
import { MdDelete } from "react-icons/md"

const Transations = ()=>{

    const {Transacoes, deletetrans} = useContext(Context)
    return(
        <div>
        <div>Transações</div>
            <div>
              {Transacoes.map((trans) => (
                <div key={trans.id} className={classNames('relative border-l-4 bg-blue-100 rounded shadow-md p-2 mb-2 flex justify-between px-1 min-w-[300px]', { 'border-l-4 border-green-500': trans.tipo == 'Entrada', 'border-l-4 border-red-500': trans.tipo == 'Saída' })}>
                  <div>
                    <p>compras</p>
                    <p>Tipo: {trans.tipo}</p>
                  </div>
                  <div className="flex gap-1">
                    {trans.tipo == 'Entrada' ? <FaChevronCircleUp className="text-xl text-green-500" /> : <FaChevronCircleDown className="text-xl text-red-500" />}
                    <span className="-mt-[3px]">{trans.tipo === 'Entrada' ? '+' + trans.valor : '-' + trans.valor}</span>
                  </div>
                  <MdDelete onClick={() => deletetrans(trans.id)} className="absolute text-xl bottom-1 right-1 cursor-pointer" />
                </div>
              ))}
            </div>
        </div>
    )
}

export default Transations