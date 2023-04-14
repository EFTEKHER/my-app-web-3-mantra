// import React from 'react'

// const Comp = (props) => {
//   return (
//     <>
//       {props.name}
//     </>
//   )
// }

// export default Comp;


let num=5;


function setNum(n)
{
num=n;
}

const arr=[num,setNum];

const [number,setNumber]=arr;


setNumber(8);
console.log('====================================');
console.log(number);
console.log('====================================');