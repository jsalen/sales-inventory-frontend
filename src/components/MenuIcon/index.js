import { useState } from 'react'
import './style.css'

export const MenuIcon = ({ open, setOpen }) => {
  return (
    <div
      className={`container ${open ? 'change' : ''}`}
      onClick={() => setOpen((prev) => setOpen(!prev))}
    >
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </div>
  )
}
