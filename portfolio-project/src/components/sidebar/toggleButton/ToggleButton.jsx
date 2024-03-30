import React from 'react'
import '../sidebar.scss'
import { motion } from 'framer-motion';

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
        <svg width='23' height='23' viewBox='0 0 23 23' className='path'>
            <motion.path strokeWidth='3' stroke='black' strokeLinecap='round' variants={{closed: { d: "M 2 2 l 20 0"}, open: { d: "M 3 16.5 L 17 2.5"} }} />
            <motion.path strokeWidth='3' stroke='black' strokeLinecap='round'  variants={{closed: { d: "M 2 9 l 20 0"}, open: { d: "M 3 16.5 L 17 2.5"} }} />
            <motion.path strokeWidth='3' stroke='black' strokeLinecap='round'  variants={{closed: { d: "M 2 16 l 20 0"}, open: { d: "M 3 2.5 L 17 16.436"} }} />
        </svg>

    </button>
  )
}

export default ToggleButton;