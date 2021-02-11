import React from 'react'
import HomePage from './Components/Main/HomePage';
import { Route} from 'react-router-dom';
import PaperDetailPage from './Components/Main/PaperDetailPage';
import NavLandingPage from './Components/Main/NavLandingPage';
import AddPaper from './Components/Main/AddPaper';

export default function Routes() {
    return (
        <Route>
            <Route path="/" exact component={HomePage} />
            <Route path="/Home" component={HomePage} />
            <Route path="/nav/:category" component={NavLandingPage} />
            <Route path="/paper/:id" component={PaperDetailPage} />
            <Route path="/add" component={AddPaper} />
        </Route>
    )
}
