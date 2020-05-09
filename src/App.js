import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <HashRouter>
            <Header />
            <Route path='/' exact={true} component={Home} />
            <Route path='/detail/:id' component={Detail} />
            <Footer />
        </HashRouter>
    );
}

export default App;
