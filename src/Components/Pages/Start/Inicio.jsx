import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { useContext } from 'react'
import classNames from 'classnames'
import Menu from './Menu'
import Content from './Content'
import {Context} from '../../../Context/Context'
const Inicio = () => {

    const {aside} = useContext(Context)

    return (
        <div className={`bg-gradient-to-b from-[#892be22d] to-white w-[100vw] ${aside && 'md:w-[calc(100%+70px)]'}`}>

            <header className={classNames(' bg-white md:p-4 flex justify-between w-[100%] p-3 lg:w-[100%]', {
                'md:w-[calc(100vw-70px)]': !aside,
            })}>
                <div className='flex items-center'>
                    <FaMoneyBill1Wave className="rotate-45 text-3xl text-secundaryColor" />
                    <h1 className='select-none text-secundaryColor text-xl ml-2 font-poppins md:text-2xl animate-typing overflow-hidden inline-block whitespace-nowrap transition-all shadow-text'>AngoFinances</h1>
                    <nav className={`ml-9 hidden md:block ${aside && 'md:ml-5 md:mr-2'}`}>
                        <ul className='flex gap-3 font-poppins'>
                            <li className='text-zinc-600 cursor-pointer hover:text-secundaryColor transition-all'>Instagram</li>
                            <li className='text-zinc-600 cursor-pointer hover:text-secundaryColor transition-all'>Whatsapp</li>
                            <li className='text-zinc-600 cursor-pointer hover:text-secundaryColor transition-all'>Linkedin</li>
                        </ul>
                    </nav>
                </div>
             <Menu/>
                <div className='hidden md:flex md:items-center md:gap-3'>
                    <button className='font-poppins transition-all select-none py-2 px-4 border border-secundaryColor bg-secundaryColor text-white hover:bg-white hover:text-secundaryColor rounded font-bold'>Login</button>
                </div>
            </header>
            <Content Aside={aside} />
        </div>
    )
}
export default Inicio