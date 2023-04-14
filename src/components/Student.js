import React from 'react'
import "./Student.css"
import Comp from "./Comp"
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <Comp name={props.name}/>
    </>
  )
}
Student.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,

}
Student.defaultProps = {
  name:"Name",
  age:0,
};

export default Student
