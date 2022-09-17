import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


const  Person = (props) => {
  console.log(props);
  return(
    <>
      <h1>fname : {props.data.name}</h1>
      <h2>lname : {props.data.lname} </h2>
      <h3>Age : {props.data.age} </h3>
      </>
  )
}

function App() {
  const [counter, setCounter] =  useState(0);
  const person = {name : "John", lname:"Doe", age : 36};
  useEffect(()=>{
    console.log("Counter"+counter)
  },[counter])

    return (
      <div className="App">
        <Person data={person} />
        <button onClick={()=> setCounter((prevCount)=> prevCount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter((nextState)=> nextState+1)}>+</button>
      </div>
    );
  }
export default App;
