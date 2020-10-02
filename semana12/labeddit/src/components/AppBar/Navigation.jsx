import { AppBar, ButtonGroup, Toolbar } from '@material-ui/core'
import React from 'react'
import { Button } from '@material-ui/core'
import {goToLoginPage, goToPostPage, goToSingUpPage, goFeedPage} from '../../routes/GoToPages'
import { useHistory } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';

export function Navigation() {
    const history = useHistory()
    const token = localStorage.getItem("token")   

    const LogOut = () => {
        localStorage.clear()
    }

    return (
        <AppBar>
            <Toolbar>
                <ButtonGroup fullWidth={true} variant="contained" color="secondary" aria-label="contained primary button group">
                    <Button onClick={() => goFeedPage(history)}><HomeIcon /></Button>
                    {token ? <Button onClick={LogOut}>Logout</Button> : <Button onClick={() => goToLoginPage(history)}>login</Button>}                    
                    <Button onClick={() => goToPostPage(history)}>Post</Button>
                    <Button onClick={() => goToSingUpPage(history)}>Cadastro</Button>
                </ButtonGroup>                
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;