import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
// import { ThemeProvider } from './components/contexts/ThemeContext';
import { StoreProvider } from './components/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// fake comments 
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 3000)
}

emitComment(1)
emitComment(2)
emitComment(3)

root.render(
  <StrictMode>
    <StoreProvider>
      <ColorModeScript />
      <App />
    </StoreProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
