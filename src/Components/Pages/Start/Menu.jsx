import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { useState } from 'react'

const Menu = () => {

    const [openMenu, setOpenMenu] = useState(false)

    function toggleMenu() {
        setOpenMenu((set) => !set)
    }

    return (
        <div className='md:hidden'>

            <IoIosMenu onClick={toggleMenu} className='cursor-pointer select-none text-3xl text-secundaryColor' />

            <div onClick={toggleMenu} className={`z-10 h-[100vh] w-[100vw] bg-overlay transition backdrop-blur-sm absolute top-0 left-0 ${openMenu ? 'visible' : 'hidden'}`}></div>

            <div className={`bg-white top-0 absolute z-20 h-[100vh] w-[60vw] animate-opacityMenu text-center p-3 ${openMenu ? 'left-0' : '-left-[700px]'} `}>
            <IoIosClose onClick={toggleMenu} className={`absolute text-secundaryColor -top-1 -right-[50px] text-5xl`} />
                <ul className='h-[100%] flex flex-col justify-around'>
                    <li>Instagram</li>
                    <li>GitHub</li>
                    <li>Linkedin</li>
                    <li><button className='border py-1 px-2 rounded'>Login</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu