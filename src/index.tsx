import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import './index.css';

// kakao 프로퍼티에 등록
declare global {
  interface Window {
    Kakao: any;
  }
}

window.Kakao.init('4011c8173db400ecb89e12a284df2dd1');
window.Kakao.isInitialized();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

