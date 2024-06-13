import { useState, useRef } from "react"
import { Context } from './Components/Context/Context'
import Routess from './Components/Routes/Routess'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [Transacoes, SetTransacoes] = useState([])
  const [aside, setaside] = useState(false)

  const inputref = useRef()
  const selectref = useRef()
  
  function toastSucess (){
    toast.success('Transação bem sucedida!', {
      autoClose: 2000
    })
  }

  function toasterror (){
    toast.warn('A transação deve conter descrição e tipo!')
  }  

  function createTrans() {

    const newdate = new Date
    const date = newdate.getMilliseconds()

    if(inputref.current.value == '' || selectref.current.value == ''){
      toasterror()
      return 
    }

    SetTransacoes([...Transacoes, {
      id: date,
      valor: inputref.current.value,
      tipo: selectref.current.value
    }])
    toastSucess()
  }

  function deletetrans(id) {
    const novasTransacoes = Transacoes.filter((trans) => trans.id !== id);
    SetTransacoes(novasTransacoes);
  }

  function setAside() {
    setaside((prevAside) => !prevAside);
  }

  return (
    <div className="bg-zinc-100">
      <Context.Provider value={{aside, setAside, Transacoes, deletetrans, inputref, selectref, createTrans
      }}>
        <Routess/>
        <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
              />
      </Context.Provider>
    </div>
  )
}
export default App