import React from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export interface CheckboxProps {
  name: string
  value: string
  checkedValues: string[]
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  size?: 'small' | 'medium' | 'large'
  error?: boolean
  children: React.ReactNode
  onChange: (values: string[]) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
  checkedValues,
  disabled = false,
  readonly = false,
  required = false,
  size = 'medium',
  error = false,
  children,
  onChange,
}) => {
  const mode = error
    ? `border-red-500 focus-within:ring-red-500 focus-within:text-red-600`
    : `border-gray-400 focus-within:border-blue-500 focus-within:ring-blue-500 focus-within:text-blue-600`
  const checkedMode = error ? 'border-red-500 bg-red-500' : 'border-blue-500 bg-blue-500'
  const sizeMode =
    size === 'small'
      ? {
          label: 'p-1.5 text-sm',
          input: 'h-5 w-5 rounded',
        }
      : size === 'medium'
      ? {
          label: 'p-2 text-base',
          input: 'h-6 w-6 rounded',
        }
      : size === 'large'
      ? {
          label: 'p-2.5 text-lg',
          input: 'h-7 w-7 rounded-md',
        }
      : {
          label: '',
          input: '',
        }

  return (
    <label
      className={[
        'flex items-center',
        sizeMode.label,
        disabled ? 'cursor-not-allowed' : '',
        readonly ? 'cursor-default' : '',
      ].join(' ')}
    >
      <div
        className={[
          'relative flex justify-center items-center border-solid border-2 focus-within:ring focus-within:ring-opacity-50',
          mode,
          sizeMode.input,
          checkedValues.includes(value) ? checkedMode : 'bg-white',
          disabled ? 'opacity-50 bg-gray-100 cursor-not-allowed' : '',
          readonly ? 'opacity-50 cursor-default focus-within:opacity-100' : 'cursor-pointer',
        ].join(' ')}
      >
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checkedValues.includes(value)}
          disabled={disabled}
          required={required}
          className={['appearance-none absolute', sizeMode.input].join(' ')}
          onChange={(event) => {
            if (!readonly) {
              onChange(event.target.checked ? [...checkedValues, value] : checkedValues.filter((v) => v !== value))
            }
          }}
        />
        <Icon icon={faCheck} className="text-white" />
      </div>
      <span className="ml-2">{children}</span>
    </label>
  )
}
