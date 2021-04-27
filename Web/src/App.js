import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
