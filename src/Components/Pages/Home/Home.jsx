import Aside from '../CreateTransation/Aside'
import { Outlet } from 'react-router-dom'
import Create from '../CreateTransation/Create'

const Home = () => {

    return (
        <div className='flex'>
           
                <Outlet />
            
        </div>
    )
}

export default Home