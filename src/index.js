import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as ServiceWorker from './serviceworker'
import { BudgetProvider } from './store';



ReactDOM.render( 
  <BudgetProvider>
    <App/>
  </BudgetProvider>
  , document.getElementById('root'));  
    
  ServiceWorker.unregister();
  


