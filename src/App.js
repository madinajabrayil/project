import React from 'react';
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import Router from './routes/route'
import {BrowserRouter} from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
             <Header/>
             <Router/>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
