import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './App.css';
function App() {
  return (
    <BrowserRouter>
     {/* main component that enables routing in react app , maintains navig history , listens to changes in url */}
      <Routes> 
        {/* // container to all your route compnents */}
        <Route path="/" element={<Home />} /> 
        {/* //mapping btw urlpath and component to be rendered */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
