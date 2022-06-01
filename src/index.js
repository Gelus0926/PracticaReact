import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import{Mateo} from './Mateo.js';
import{Menu} from './Menu.js';
import {Carusel} from './Carusel.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<div>
  <Menu />
  <Mateo />
  <img src="assets/img/descarga.img" alt="hola"/>
</div>


)

