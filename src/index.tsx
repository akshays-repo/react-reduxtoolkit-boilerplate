import ReactDOM from 'react-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { SidebarProvider } from './contexts/SidebarContext';
import ThemeProvider from './theme/ThemeProvider';

ReactDOM.render(
  <BrowserRouter>
    <SidebarProvider>
      {' '}
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </SidebarProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
