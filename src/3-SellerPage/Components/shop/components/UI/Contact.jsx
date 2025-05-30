import React from 'react'

function Contact({icon,value}) {
  return (
    <li className="flex gap-5">
            <img
              src={icon}
              alt="Shop"
              width={30}
              
            /> {value}
    </li>
  )
}

export default Contact