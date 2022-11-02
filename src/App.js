import './App.css';
import React, {useState} from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  let [colors, setColors] = useState([])
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
<div className="App">
    {colors.map((color, i) => 
        <ColorBlock key={i} color={color} />
    )}
    <ColorForm addColor={addColor} />
</div>

  );
}

export default App;
