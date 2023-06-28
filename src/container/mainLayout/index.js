import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainlayoutStyled } from './styled'

const Mainlayout = () =>{ 
    return(
        <MainlayoutStyled>
            <Outlet/>
        </MainlayoutStyled>
    )
}

export default Mainlayout