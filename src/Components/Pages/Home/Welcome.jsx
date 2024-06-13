import home from './assets/home.gif'
import {useNavigate} from 'react-router-dom'

const Welcome = () => {
    const navegation = useNavigate()

    function StartHome(){
        navegation('/Home/Inicio')
    }
    return (
        <div className='h-[100vh] flex items-center justify-center bg-white'>
            <div>
                <img src={home} alt="home" className='w-[250px] h-[250px] m-auto md:w-[350px] md:h-[350px]'/>
                <div>
                    <p className='w-[360px]'><span className='font-medium'>Seja bem à AO-Finanças</span> Nosso objectivo é ajudar você a alcançar a liberdade financeira e a construir um futuro mais próspero</p>
                </div>
                <div className='flex justify-center mt-3'>
                    <button className='px-2 py-1 bg-blue-800 select-none text-white rounded' onClick={StartHome}>Começar</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome