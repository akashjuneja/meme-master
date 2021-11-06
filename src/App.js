import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import Meme from './components/Meme';
import Template from './components/Template';

function App() {
  const [meme, setMeme] = useState([]);
  const [template, setTemplate] = useState(null);
  useEffect(async () => {
    const info= await axios.get("https://api.imgflip.com/get_memes")
    //console.log(info.data.data.memes)
    setMeme(info.data.data.memes)

  }, [])
  console.log(meme)
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Meme Generator</h1>
     {template===null?<Meme meme={meme} setTemplate={setTemplate}/>:<Template template={template} setTemplate={setTemplate}/>}
  </div>
  );
}

export default App;
