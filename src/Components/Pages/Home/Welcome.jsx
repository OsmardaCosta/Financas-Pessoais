import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaArrowDown, FaArrowRight} from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import classNames from 'classnames'
import Chart from './Chart/Chart'

const Welcome = () => {
    const [drop, setDrop] = useState(false)
    const navigate = useNavigate()

    function toggleDrop() {
        setDrop((prevDrop) => !prevDrop)
    }

    function StartHome() {
        navigate('/Home/Inicio')
    }

    return (
        <div className='min-h-[100vh] bg-white'>
            <header className='z-[1] relative h-[390px] bg-fixed bg-cover bg-home flex justify-between px-5 py-2 overflow-x-hidden'>
                <div className='text-3xl font-bold text-white '>
                    FINANCES
                </div>
                <div onClick={toggleDrop} className='cursor-pointer relative'>
                    <MdMenu className='text-white text-3xl font-bold md:hidden' />

                    <div className={classNames('animate-opacityMenu select-none bg-white absolute right-0 rounded p-2 md:hidden w-[140px] gap-2', {
                        'block': drop,
                        'hidden' : !drop
                    })}>
                        <p><a href="https://github.com/osmardacosta" target='_blank' rel='noopener noreferrer'>GitHub</a></p>
                        <p><a href="https://instagram.com/osmar_costa77" target='_blank' rel='noopener noreferrer'>Instagram</a></p>
                        <p><a href="https://github.com/osmardacosta" target='_blank' rel='noopener noreferrer'>Linkedin</a></p>
                    </div>
                </div>

                <div className='hidden md:flex flex-col '>
                    <ul className='flex gap-3 text-white items-center'>
                        <li className='cursor-pointer hover:text-zinc-400'>GitHub</li>
                        <li className='cursor-pointer hover:text-zinc-400'>Instagram</li>
                        <li className='cursor-pointer hover:text-zinc-400'>LinkedIn</li>
                        <li>
                            <button 
                                onClick={StartHome} 
                                className='bg-[#8a2be2] text-white px-4 py-1 rounded font-medium select-none md:text-xl md:hover:bg-[#965dcc] transition-all'>
                                Comece
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="-z-[20] absolute top-0 left-0 h-full w-full bg-overlay"></div>
            </header>
           
            <main className='relative px-8'> 
                <button onClick={StartHome} className='z-[30] absolute -top-[40px] right-[50%] translate-x-14 px-6 py-2 bg-[#8a2be2] text-white rounded -mt-[10px] shadow-md font-medium text-lg md:hidden'>Comece</button>
                <h1 className='text-center mt-8 font-semibold text-2xl'>Vantagens em gerir suas finanças</h1>
                <div className=' mt-6 grid grid-cols-1 md:grid-cols-3 md:gap-4'>
                    <div className='mb-4 p-3 animate-animationParagraphs '>
                        <h2 className='font-medium text-center text-lg'>
                            Acesso em Tempo real
                        </h2>
                        <p>Gerir finanças através de uma aplicação web permite acesso instantâneo as informacões financeiras a qualquer momento  e de qualquer lugar com uma conexão a internet. Isso facilita o monitoramento e tomada de deçisões financeiras rápidas e informadas sem a necessidade de estar em um local específico.</p>
                    </div>

                    <div className='mb-4 p-3 animate-animationParagraphs'>
                        <h2 className='font-medium text-center text-lg'>
                            Automação e eficiência
                        </h2>
                        <p>Aplicações web de gestão financeira frequentemente oferecem funcionalidades de automação, com categorização de despesas, geração de relatórios e lembretes de pagamento. Isso reduz a necessidade de entrada manual de dados, economiza erros humanos, tornando processo mais eficiente.</p>
                    </div>

                    <div className='mb-4 p-3 animate-animationParagraphs'>
                        <h2 className='font-medium text-center text-lg'>
                            Segurança e Backup
                        </h2>
                        <p>Aplicações web geralmente incluem recursos robustos de segurança, como criptografia de dados e autênticação de multifator. Além disso, os dados são frequentemente armazenadosem«« em servidores seguros com backups regulares, grarantindo que as informacões financeiras estejam protegidas contra perdas e acessos não autorizados-</p>
                    </div>
                </div>
                <div className='mb-5 grid items-center grid-cols-1 md:grid-cols-2'>
                    <div className="mt-5">
                        <p className='text-center'><span className='text-2xl font-bold'>N</span>os últimos anos tem sido um pouco destacado a subida de porcentagem positiva para alguma parte dos cidadãos de angola, mas nem por isso você deve fica descançado porque para atingir uma escalabilidade positiva você deve ter uma fonte de gerenciamento das tuas finanças! <span className='text-[#8a2be2]'>Dê uma olhada no gráfico <FaArrowDown className='inline text-xl md:hidden '/> <FaArrowRight className="text-xl inline sm:hidden md:inline" /> </span></p>
                    </div>
                    <div className='overflow-y-auto mt-7 md:m-0 flex justify-center'>
                        <Chart/>
                    </div>
                </div>
            </main>
            <footer className='bg-zinc-500 text-white p-5 grid grid-cols-1 md:grid-cols-3'>
                <div className='m-auto mb-3 border-b border-zinc-600 pb-3'>
                    <h1 className='text-center font-bold text-xl'>Contactos</h1>
                    <p><span className='font-medium mr-2'>Email:</span><a href="mailto:osmardomingospiangue@gmail.com" className='text-blue-600'>osmardomingospiangue@gmail.com</a></p>
                    <p><span  className='font-medium mr-2'>Whatsapp:</span><a href="https://wa.me/244932668487?text=Olá%20Osmar" className='text-blue'>932-668-487</a></p>
                    <p><span  className='font-medium mr-2'>Localização:</span>
                        Angola/Luanda
                    </p>
                </div>

                <div className='m-auto mb-3 border-b border-zinc-600 pb-3'>
                    <h1 className='text-center font-bold text-xl'>Créditos</h1>
                    <p><span className='font-medium mr-2'>Imagens</span>: <a href="https://pexels.com" className='text-blue-600'>Pexels</a></p>
                    <p className='w-[300px]'><span className='font-medium mr-2'>Dados Estáticos:</span>
                        Informações oficiais sobre porcentagem de cidadãos com finanças estaveis!
                    </p>
                    <p><span className='font-medium mr-2'>Desenvolvido por:</span>
                        Osmar Costa
                    </p>
                </div>

                <div className='m-auto border-zinc-600'>
                    <h1  className='text-center font-bold text-xl'>Aviso Legal</h1>
                    <p className='w-[300px]'>As informações apresentadas neste site são de carácter informativo e não constituem aconselhamento financeiro!</p>
                </div>
            </footer>
        </div>
    )
}

export default Welcome
