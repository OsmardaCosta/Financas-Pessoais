import { Outlet } from 'react-router-dom'

const Home = () => {

    return (
        <div className='flex relative'>
                <Outlet />
        </div>
    )
}

export default Home