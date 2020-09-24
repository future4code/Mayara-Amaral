import React from 'react'
import {Cabecalho, Logo} from '../../styled/styled'
import logo from '../../assets/logo.svg'


function Header() {
    return (
        <Cabecalho>
           <Logo src={logo} />
        </Cabecalho>
    )
}

export default Header;