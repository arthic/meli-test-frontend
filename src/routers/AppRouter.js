import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import { Category } from '../components/Category';
import { Search } from '../components/Search';
import { Results } from '../components/Results';
import { Details } from '../components/Details';
import { Welcome } from '../components/Welcome';

export const AppRouter = () => {

    return (
        <Router>
            <>
                <Search />
                <div className="meli-container">
                    <Category />
                    <Switch>
                        <Route exact path="/" component={ Welcome } />
                        <Route exact path="/items" component={ Results } />
                        <Route exact path="/items/:id" component={ Details } />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </>
        </Router>
    )
}
