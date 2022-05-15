import './Sidebaroptions.css';
import React from 'react'

const Sidebaroptions = ({ title, number, isActive}) => {
  return (
    <div className={`sidebaroptions ${isActive && `sidebaroptions--active`}`}>
       
       <h4>{title}</h4>
       <p>{number}</p>
    </div>
  )
}

export default Sidebaroptions
