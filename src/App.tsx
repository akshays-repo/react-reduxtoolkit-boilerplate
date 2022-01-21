
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routes/Router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const hostName = window.location.hostname;

if (hostName !== 'localhost') {
  console.error = function () { };
  console.warn = function () { };
  console.log = function () { };
}



function App() {
  return (
    <div className='App'>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <AppRouter />
    </div>
  );
}

export default App;
