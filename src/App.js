import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Produkter from './components/Produkter'
import Footer from './components/Footer'
import Rejser from './components/Rejser'
import Kurser from './components/Kurser'
import Login from './components/Login'
import Kontakt from './components/Kontakt'
import Omso from './components/Omso'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Produkter' component={Produkter} />
          <Route exact path='/Rejser' component={Rejser} />
          <Route exact path='/Kurser' component={Kurser} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Kontakt' component={Kontakt} />
          <Route exact path='/Omso' component={Omso} />
        </switch>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
