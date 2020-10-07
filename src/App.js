import React, { useState, useCallback} from 'react';
import './App.css';
import Slider from './components/Slider'
import images from './images'


function App() {
  const [autoPlay, setAutoPlay] = useState(3)

  const stopAutoPlay = useCallback(() => {
    setAutoPlay(0)
  }, [])


  return (
   
      <Slider slides={images}/>
    
  );
}

export default App;
