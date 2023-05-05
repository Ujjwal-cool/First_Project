import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';

function App() {
  const[theme,setTheme]=useState("Dark");
  const[text,setText]=useState('Enable Dark Mode');
  const[zoro,setZoro]=useState('white');
  const handleClick=()=>{
    if(theme==="Dark"){
      document.body.style.background='Black';
      setZoro('grey');
      setTheme("Light");
      setText('Enable Light Mode');
    }
    else{
      document.body.style.background='white';
      setZoro('white');
      setTheme("Dark");
      setText('Enable Dark Mode');
    }
  }
  return (
    <div>
    <Navbar handletheme={handleClick} textColor={text} />
    <Product luffy={zoro} />
    </div>
  );
}

export default App;
