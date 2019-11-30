import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApiProvider from './providers/ApiProvider';
import { API_HOST } from './helpers/constants';

async function main() {
  let questionsResourceUrl = '';
  try {
    const data = await axios.get(API_HOST);
    if (data && data.data) {
      questionsResourceUrl = data.data.questions_url;
    }
    const jsx = (
      <ApiProvider  baseURL={questionsResourceUrl}>
        <App />
      </ApiProvider>
    );
    ReactDOM.render(jsx, document.getElementById('root'));
  }
  catch(err) {
    console.log(err);
  };
}

main();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
