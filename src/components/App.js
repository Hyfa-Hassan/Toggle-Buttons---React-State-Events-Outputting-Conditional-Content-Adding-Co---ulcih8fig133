import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [isOff, setIsOff] = useState(true);

  function handleClick(){
    setIsOff(!isOff)
  }
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      { isOff ? 'ON' : 'OFF' }
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        { isOff ? 'ON' : 'OFF' }
      </button>
    </div>
  );
}


export default App;
