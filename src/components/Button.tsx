import React from 'react'
import { classNames } from '../lib/classNames'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  color?: 'text' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: React.ReactNode
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  color = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
}) => {
  const sizeMode =
    size === 'small'
      ? 'py-1.5 px-4 text-xs'
      : size === 'medium'
      ? 'py-2 px-5 text-sm'
      : size === 'large'
      ? 'py-3 px-6 text-base'
      : ''
  const mode =
    color === 'text'
      ? 'text-gray-600 bg-white hover:underline'
      : color === 'light'
      ? 'text-gray-600 bg-gray-100 hover:bg-gray-200'
      : color === 'dark'
      ? 'text-white bg-gray-700 hover:bg-gray-800'
      : color === 'primary'
      ? 'text-white bg-teal-500 hover:bg-teal-600'
      : color === 'link'
      ? 'text-white bg-blue-500 hover:bg-blue-600'
      : color === 'success'
      ? 'text-white bg-green-500 hover:bg-green-600'
      : color === 'warning'
      ? 'text-white  bg-yellow-500 hover:bg-yellow-600'
      : color === 'danger'
      ? 'text-white bg-red-500 hover:bg-red-600'
      : ''

  return (
    <button
      type={type}
      className={classNames(
        sizeMode,
        mode,
        'font-bold rounded-full text-center w-full md:w-auto focus:ring focus:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
