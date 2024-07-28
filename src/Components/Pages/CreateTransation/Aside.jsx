import { useContext, useState, useEffect } from "react"
import classNames from "classnames"
import { Outlet, Link } from 'react-router-dom'
import { FaChevronCircleRight, FaHome, FaPlus } from "react-icons/fa"
import { Context } from '../../../Context/Context'

const Aside = () => {

    useEffect(() => {
        setStart(true)
    }, [])

    const { aside, setAside } = useContext(Context)

    const [isStart, setStart] = useState()
    const [isCreate, setCreate] = useState()

    function ActiveStart() {
        setCreate(false)
        setStart(true)
    }

    function ActiveCreate() {
        setStart(false)
        setCreate(true)
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
                })}>

                </div>

                <div className=" w-full flex justify-around items-center md:m-0 md:flex md:flex-col md:gap-3 md:items-start">
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
                            })}>Resumo</span>
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
                            })}>Crie</span>
                        </div>
                    </Link>
                </div>
            </aside>
            <Outlet />
        </>
    )
}

export default Aside