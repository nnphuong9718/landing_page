import React from 'react'
import './style.scss'
export default function MyButton({disabled,children, className, type, size,...props}) {
  const typeClass = type ? ` my-button--${type}` : ''
  const sizeClass = size ? `my-button--${size}` : ''
  const addClass = className || ''
  const classes = ['my-button', typeClass, sizeClass, addClass, disabled&&'disableBtn'].filter(it => it).join(' ')
  return(
    <button disabled={disabled} className={classes}{...props}>
      {children}
    </button>
  )
} 