import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './nav'
import Home from './home'
import Fmf from './fmf'

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/fmf' element={<Fmf/>}/>
                </Routes>
            </BrowserRouter>

        )
    }
}

const root = document.querySelector('#root')

render(<App/>, root);
