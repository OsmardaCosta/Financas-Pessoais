import { useContext, useState } from "react"
import classNames from "classnames"
import { Outlet, Link } from 'react-router-dom'
import { FaChevronCircleRight, FaHome, FaPlus } from "react-icons/fa"
import { FaListCheck } from "react-icons/fa6"
import { Context } from '../../../Context/Context'

const Aside = () => {

    const { aside, setAside, Transacoes } = useContext(Context)

    const [isStart, setStart] = useState()
    const [isCreate, setCreate] = useState()
    const [isTransations, setTransations] = useState()

    function ActiveStart() {
        setTransations(false)
        setCreate(false)
        setStart(true)
    }

    function ActiveCreate() {
        setStart(false)
        setTransations(false)
        setCreate(true)
    }

    function ActiveTransations() {
        setCreate(false)
        setStart(false)
        setTransations(true)
    }
    return (
        <>
            <aside className={classNames(' z-[2] fixed bottom-0 bg-white w-[100vw] flex justify-center items-center md:shadow-xl md:block md:p-6 transition-all lg:w-[250px]',
                {
                    "md:relative md:w-[70px] md:h-[100vh] ": !aside,
                    "w-[200px] md:h-[100vh] md:block md:relative": aside,
                }
            )}>
                <FaChevronCircleRight onClick={setAside} className={classNames("hidden text-2xl cursor-pointer absolute right-[-10px] top-4 md:block lg:hidden", {
                    "rotate-[180deg] transition-all": aside
                })} />

                <div className={classNames('hidden md:block w-[4px] h-[30px] transition-all bg-secundaryColor absolute left-0', {
                    'md:top-[40px] lg:top-[26px]': isStart,
                    'md:top-[92px] lg:top-[65px]': isCreate,
                    'md:top-[140px] lg:top-[115px]': isTransations
                })}>

                </div>

                <div className="w-full flex justify-around items-center md:flex md:flex-col md:gap-3 md:items-start">
                    <Link to="Inicio">
                        <div onClick={ActiveStart} className={classNames('cursor-pointer select-none lg:flex lg:items-center lg:mb-3 gap-3', {
                            'md:flex items-center': aside
                        })}>
                            <FaHome className={classNames('m-auto text-2xl cursor-pointer md:mb-4 md:mt-5 lg:m-0', {
                                'text-secundaryColor': isStart,
                                'md:m-0': aside
                            })} />
                            <span className={classNames('font-medium md:block lg:block', {
                                'text-secundaryColor': isStart,
                                'md:hidden': !aside,
                            })}>Início</span>
                        </div>
                    </Link>

                    <Link to="Create">
                        <div onClick={ActiveCreate} className={classNames('cursor-pointer select-none lg:flex lg:items-center gap-3', {
                            'md:flex gap-3 items-center': aside
                        })}>
                            <FaPlus className={classNames('m-auto text-2xl cursor-pointer lg:m-0', {
                                'text-secundaryColor': isCreate,
                                'md:m-0': aside
                            })} />
                            <span className={classNames('font-medium md:block lg:block', { 
                                'text-secundaryColor': isCreate,
                                "md:hidden": !aside 
                            })}>Criar</span>
                        </div>
                    </Link>
                    <Link to="Transations">
                        <div onClick={ActiveTransations} className={classNames('relative cursor-pointer select-none lg:flex lg:items-center gap-3 md:mt-3', {
                            'md:flex items-center': aside
                        })}>
                            <FaListCheck className={classNames('m-auto text-2xl cursor-pointer lg:m-0', {
                                'text-secundaryColor': isTransations,
                                'md:m-0': aside
                            })} />
                            <span className={classNames('font-medium md:block lg:block', { 
                                'text-secundaryColor': isTransations,
                                "md:hidden": !aside 
                            })}>Transações</span>
                            {Transacoes.length ?
                                <div className={classNames("bg-secundaryColor font-medium rounded-full w-[20px] h-[20px] absolute right-[15px] -top-[8px] flex md:static justify-center items-center text-white lg:static", {
                                    "md:absolute md:-right-[13px] md:-top-[9px] ": !aside,
                                })}>
                                    <p>{Transacoes.length}</p></div> : ''}
                        </div>
                    </Link>
                </div>
            </aside>
            <Outlet />
        </>
    )
}

export default Aside

//w-[4px] h-[30px]