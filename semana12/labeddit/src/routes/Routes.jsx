import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { FeedPage } from '../screens/FeedPage/FeedPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import PostPage from '../screens/PostPage/PostPage'
import SingUpPage from '../screens/SingUpPage/SingUpPage'

export function Routes() {
    return (
            <Switch>
                <Route exact path="/">
                    <FeedPage />
                </Route>

                <Route exact path="/Login">
                   <LoginPage />
                </Route>

                <Route exact path="/Post">
                    <PostPage />
                </Route>

                <Route exact path="/Cadastro">
                    <SingUpPage />
                </Route>

                <Route>
                    <p>Error(404)</p>
                </Route>
            </Switch>
    )
}