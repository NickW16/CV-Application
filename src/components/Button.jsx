import { useState } from 'react'

export default function Button({color = "white", text}) {
   const buttonStyle = {
      color: color,
      border: '2px solid white'
   };

   return <button style={buttonStyle}>{text}</button>;
}

