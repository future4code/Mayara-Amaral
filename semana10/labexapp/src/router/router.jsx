import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import InitialPage from '../screens/InitialPage/InitialPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import PublicPage from '../screens/PublicPage/PublicPage'
import SubscribersPage from '../screens/SubscribersPage/SubscribersPage'
import TravelRegistrationPage from '../screens/TravelRegistrationPage/TravelRegistrationPage'
import TripsPage from '../screens/TripsPage/TripsPage'

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <InitialPage />
                </Route>
                <Route exact path="/public">
                   <PublicPage />
                </Route>
                <Route exact path="/subscribers">
                    <SubscribersPage />
                </Route>
                <Route exact path="/travelregistrationpage">
                    <TravelRegistrationPage />
                </Route>
                <Route exact path="/tripspage">
                    <TripsPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route >
                    <div>(404)</div>
                </Route>                
            </Switch>
        </BrowserRouter>
    )
}

export default Routers;