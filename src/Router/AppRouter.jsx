import {Routes, Route,} from 'react-router-dom'
import Home from '../pages/Home/index'
import About from '../pages/About/index'

function AppRouter(){

    return(
        <>
            < Routes >
                 < Route path='/' element={<Home /> } />
                 < Route path='/about' element={<About />} />
            </ Routes>
        </>
    )
}

export default AppRouter