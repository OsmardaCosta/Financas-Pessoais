import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home'
import Welcome from '../Pages/Home/Welcome'
import Aside from '../Pages/CreateTransation/Aside'
import Create from '../Pages/CreateTransation/Create'
import Transations from '../Pages/CreateTransation/Transations'
import Inicio from '../Pages/Start/Inicio'
import Header from '../Pages/Start/Header'

const Routess = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Home" element={<Home />}>
                    <Route path="" element={<Aside />}>
                  
                         <Route path="Create" element={<Create />} />
                        <Route path="Inicio" element={<Inicio/>}/>
                    </Route>
                       
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routess