import React from 'react'

interface ButtonProps {
    label: string;
  }

function Button({
    label,
  }: ButtonProps) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-xl'>
      {label}
    </button>
  )
}

export default Button
