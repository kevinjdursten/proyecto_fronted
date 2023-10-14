
import React from 'react';
import { BrowserRouter as 'Router', Route, Switch } from 'react-router-dom';

import Home from './vistas/Home.jsx';
import About from './vistas/About us.jsx'; 
import Regalos from './vistas/Regalos.jsx';
import { productos } from './productos.1.js';


        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/about us" component={About} />
          <Route path="/Regalos" component={Regalos} />
        </Switch>
 
export default Home;
export default productos;

