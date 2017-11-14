import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

import './styles/main.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/home.scss';
import './styles/about.scss';
import './styles/reviews.scss';
import './styles/events.scss';
import './styles/reservation.scss';
import './styles/carousel.scss';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  	<BrowserRouter>
      <App/>
  	</BrowserRouter>
  , document.getElementById('root'));

registerServiceWorker();
