import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import HomePage from './Component/HomePage/HomePage';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
