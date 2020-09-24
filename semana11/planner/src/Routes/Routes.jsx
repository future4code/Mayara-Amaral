import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PlannerPage from '../pages/PlannerPage/PlannerPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/PlannerPage">
                    <PlannerPage />
                </Route>

                <Route>
                    <p>(404)</p>
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;