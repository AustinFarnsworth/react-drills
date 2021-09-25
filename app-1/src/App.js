import React, {useState}from 'react';
import './App.css';





function App() {

  const [data, setData] = useState()

  function getData (e) {
    setData(e.target.value)
  }
  

  return (
    <div className="App">
     <h1>Type Here</h1>
     <input type="text" onChange={getData} />
     <p>
       {data}
     </p>
    </div>
  );
}

export default App;
