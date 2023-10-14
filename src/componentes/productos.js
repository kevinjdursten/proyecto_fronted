import React from 'react';
import { BrowserRouter as 'Router', Route, Switch } from 'react-router-dom';

import Home from './vistas/Home.jsx';
import About from './vistas/About us.jsx'; 
import Regalos from './vistas/Regalos.jsx';


function productos(){
    return
    <div className='contenedor-producto'>
    <img
      className='imagen-producto'
      src={require('../kramelo shop arreglos')}
      alt=
    
    />
    
    <div classname='info-producto'>
      <p classname='titulo'></p>
      <p classname='descripcion'></p>
      <p classname='precio'></p>

    </div>

    </div>
    }




        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/about us" component={About} />
          <Route path="/Regalos" component={Regalos} />
        </Switch>
 
export default Home;
export default productos;

