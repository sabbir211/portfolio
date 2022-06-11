import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom"
import Project from './Components/Home/Projects/Project';
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/project/:id' element={<Project></Project>}></Route>
      </Routes>
    </div>
  );
}

export default App;
