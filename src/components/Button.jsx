import React from 'react'

const Button = ({children, className, ...props}) => {
  return (
    <button {...props} className={`bg-gradient-to-r from-[#fc562f] to-[#fe7819] font-sm text-white px-4 font-alata cursor-pointer py-2 rounded-md ${className && className}`}>
        {children}
    </button>
  )
}

export default Button
