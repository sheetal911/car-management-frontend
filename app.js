import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import CarList from './components/carlist';
import CarDetails from './components/cardetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CarList} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/car/:id" component={CarDetails} />
            </Switch>
        </Router>
    );
}

export default App;
