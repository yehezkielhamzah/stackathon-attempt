import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Nav from './nav'
import Home from './home'
import Fmf from './fmf'
import Card from './card'

class App extends React.Component {
    render() {
        return(
            <HashRouter>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/fmf' element={<Fmf/>}/>
                    <Route path='/card' element={<Card/>}/>
                </Routes>
            </HashRouter>

        )
    }
}

const root = document.querySelector('#root')

render(<App/>, root);
