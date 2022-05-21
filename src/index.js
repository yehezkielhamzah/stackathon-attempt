import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav'
import Home from './home'

class App extends React.Component {
    render() {
        return(
            <Router>
                <Nav/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                </Routes>
            </Router>

        )
    }
}

const root = document.querySelector('#root')

render(<App/>, root);
