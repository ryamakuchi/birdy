import React from 'react'

export interface RadioProps {
  name: string
  value: string
  checkedValue: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  size?: 'small' | 'medium' | 'large'
  error?: boolean
  children: React.ReactNode
  onChange: (value: string) => void
}

export const Radio: React.FC<RadioProps> = ({
  name,
  value,
  checkedValue,
  disabled = false,
  readonly = false,
  required = false,
  size = 'medium',
  error = false,
  children,
  onChange,
}) => {
  const mode = error
    ? `border-red-500 focus-within:ring-red-500`
    : `border-gray-400 focus-within:border-blue-500 focus-within:ring-blue-500`
  const sizeMode =
    size === 'small'
      ? {
          label: 'p-1.5 text-sm',
          input: 'h-3.5 w-3.5',
        }
      : size === 'medium'
      ? {
          label: 'p-2 text-base',
          input: 'h-4 w-4',
        }
      : size === 'large'
      ? {
          label: 'p-2.5 text-lg',
          input: 'h-5 w-5',
        }
      : {
          label: '',
          input: '',
        }

  return (
    <label
      key={value}
      className={[
        'flex items-center',
        sizeMode.label,
        disabled ? 'cursor-not-allowed' : '',
        readonly ? 'cursor-default' : '',
      ].join(' ')}
    >
      <div
        className={[
          'relative flex justify-center items-center bg-white border-solid border-2 rounded-full transition-all focus-within:ring focus-within:ring-opacity-50',
          mode,
          sizeMode.input,
          checkedValue === value ? `border-radio ${error ? 'border-red-500' : 'border-blue-500'}` : '',
          disabled ? 'opacity-50 bg-gray-100 cursor-not-allowed' : '',
          readonly ? 'opacity-50 focus-within:opacity-100' : 'cursor-pointer',
        ].join(' ')}
      >
        <input
          type="radio"
          name={name}
          value={value}
          checked={checkedValue === value}
          disabled={disabled}
          required={required}
          className={['appearance-none absolute', sizeMode.input].join(' ')}
          onChange={() => {
            if (!readonly) onChange(value)
          }}
        />
      </div>
      <span className="ml-2">{children}</span>
    </label>
  )
}
