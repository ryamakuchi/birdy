import React from 'react'

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
      ? 'text-white bg-pink-600 hover:bg-pink-700'
      : color === 'link'
      ? 'text-white bg-blue-600 hover:bg-blue-700'
      : color === 'success'
      ? 'text-white bg-green-600 hover:bg-green-700'
      : color === 'warning'
      ? 'text-white  bg-yellow-600 hover:bg-yellow-700'
      : color === 'danger'
      ? 'text-white bg-red-600 hover:bg-red-700'
      : ''

  return (
    <button
      type={type}
      className={[
        sizeMode,
        mode,
        'font-bold rounded-full focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed',
      ].join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
