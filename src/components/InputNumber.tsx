import React from 'react'

export interface InputNumberProps {
  label: string
  value?: number
  placeholder?: string
  autoComplete?: string
  disabled?: boolean
  readonly?: boolean
  maxLength?: number
  minLength?: number
  required?: boolean
  size?: 'small' | 'medium' | 'large'
  error?: boolean
  onChange: (value: string) => void
}

export const InputNumber: React.FC<InputNumberProps> = ({
  label = '',
  value = null,
  placeholder = '',
  autoComplete = '',
  disabled = false,
  readonly = false,
  maxLength = 200,
  minLength = 0,
  required = false,
  size = 'medium',
  error = false,
  onChange,
}) => {
  const mode = error
    ? `border-red-500 focus-within:ring-red-500 focus-within:text-red-600${value !== null ? ' text-red-600' : ''}`
    : `border-gray-400 focus-within:border-blue-500 focus-within:ring-blue-500 focus-within:text-blue-600${
        value !== null ? ' text-gray-500' : ''
      }`
  const sizeModeText =
    size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : size === 'large' ? 'text-lg' : ''
  const sizeModeTextFocusWithin =
    size === 'small'
      ? `leading-9 focus-within:text-xs${value !== null ? ' text-xs' : ' text-sm'}`
      : size === 'medium'
      ? `leading-12 focus-within:text-sm${value !== null ? ' text-sm' : ' text-base'}`
      : size === 'large'
      ? `leading-16 focus-within:text-base${value !== null ? ' text-base' : ' text-lg'}`
      : ''
  const sizeModePadding =
    size === 'small'
      ? `px-2 py-3 focus-within:pt-5 focus-within:pb-1${value !== null ? ' pt-5 pb-1' : ''}`
      : size === 'medium'
      ? `px-3 py-4 focus-within:pt-6 focus-within:pb-2${value !== null ? ' pt-6 pb-2' : ''}`
      : size === 'large'
      ? `px-4 py-5 focus-within:pt-7 focus-within:pb-3${value !== null ? ' pt-7 pb-3' : ''}`
      : ''
  const isDisabled = disabled ? 'bg-gray-100 cursor-not-allowed' : ''
  return (
    <label
      className={[
        mode,
        isDisabled,
        sizeModePadding,
        readonly ? 'border-none' : 'border-solid border-2',
        'block relative rounded-lg text-0 focus-within:ring focus-within:ring-opacity-50',
      ].join(' ')}
    >
      <span
        className={[
          sizeModeTextFocusWithin,
          'transition-all focus-within:leading-normal',
          value !== null ? 'leading-normal' : '',
        ].join(' ')}
      >
        <span className="absolute top-1">{label}</span>
        <input
          className={[
            sizeModeText,
            'block w-full text-black placeholder-gray-500 placeholder-opacity-0 transition-all focus:placeholder-opacity-100',
          ].join(' ')}
          value={value}
          placeholder={placeholder}
          type="number"
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readonly}
          maxLength={maxLength}
          minLength={minLength}
          required={required}
          onChange={(event) => onChange(event.target.value)}
        />
      </span>
    </label>
  )
}
