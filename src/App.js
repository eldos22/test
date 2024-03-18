import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './MainPage/Mainpage';
import Buys from './Buys/Buys';
import Salary from './Salary/Salary';
import Header from './Header/Header';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Mainpage></Mainpage>}></Route>
          <Route path='buys' element={<Buys></Buys>}></Route>
          <Route path='salary' element={<Salary></Salary>}></Route>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
