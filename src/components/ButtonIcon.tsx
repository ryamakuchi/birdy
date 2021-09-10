import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { classNames } from '../lib/classNames'

export interface ButtonIconProps {
  type?: 'button' | 'submit' | 'reset'
  // TODO: 使いそうなカラーを愚直に追加していく
  color?: 'text' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  icon: IconDefinition
  onClick: () => void
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  type = 'button',
  color = 'primary',
  size = 'medium',
  disabled = false,
  icon,
  onClick,
}) => {
  const sizeMode =
    size === 'small'
      ? 'w-6 h-6 text-xs'
      : size === 'medium'
      ? 'w-8 h-8 text-sm'
      : size === 'large'
      ? 'w-12 h-12 text-base'
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
        'font-bold rounded-full text-center focus:ring focus:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  )
}
