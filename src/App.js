import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import HomePage from './Component/HomePage/HomePage';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
      </Routes>
    </div>
  );
}

export default App;
