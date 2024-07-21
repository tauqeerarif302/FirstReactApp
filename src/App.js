import './App.css';
import { Header } from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Contact } from './components/contact';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
