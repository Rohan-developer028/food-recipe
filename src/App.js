import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/header'  element={ <Header /> } />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
