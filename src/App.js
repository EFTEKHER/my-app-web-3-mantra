import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
function App() {
  //array destructuring
const [num, setNum]=useState(0);

function inc()
{
  setNum(num+1);
}
function dec()
{
 if(num>0)
 {
  setNum(num-1);
 }
 else{
  setNum(0);
 }
}
function inc2(n)
{
  setNum(num+2);
}

  return (
    
    <div className="App">
<Header/>
<div className="main">
<h1 className="heading" >{num}</h1>
<div className="buttons">
<button className="btn" onClick={inc}>increment</button>
<button className="btn" onClick={dec}>decrement</button>
<button className="btn" onClick={()=>inc2(2)}>increment by 2</button>
</div>
</div>
    </div>
  );
}

export default App;
