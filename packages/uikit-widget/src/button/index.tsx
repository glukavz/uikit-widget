import React from 'react';

export default (props) => {
  return <button className={`
  py-2 
  px-4 
  font-semibold 
  rounded-lg 
  shadow-md 
  text-white 
  bg-${props.color}-500 
  hover:bg-${props.color}-700 
  border-none 
  cursor-pointer 
  `}>按钮</button>
}

