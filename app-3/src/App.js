import React from 'react';
import './App.css';


function App() {



const carsArray = [
  {
    id: 1,
    name: "Toyota",
  },
  {
    id: 2,
    name: "Chevrolet",
  },
  {
    id: 3,
    name: "Ford",
  },
  {
    id: 3,
    name: "Tesla",
  },
  {
    id: 4,
    name: "Lamborghini"
  }
]

function DisplayCars(props) {
  return (
    <div>
      
    <h3>{props.name}</h3>
    </div>
  )
}


  return (
    <div className="App">
        <input type="text"/>
        {carsArray.map(function (cars) {
          return (
            <DisplayCars 
            key={cars.id}
            name={cars.name}
            />
          );
        })}
      
      
    </div>
  );
}

export default App;
