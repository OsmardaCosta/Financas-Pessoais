import Header from './Header'
import Content from './Content'
import {Context} from '../../../Context/Context'
import { useContext } from 'react'
const Inicio = () => {

    const {aside} = useContext(Context)

    return (
        <div className={`bg-gradient-to-b from-[#892be22d] to-white w-[100vw] ${aside && 'md:w-[calc(100%+70px)]'}`}>

            <Header />
            <Content Aside={aside} />
        </div>
    )
}
export default Inicio