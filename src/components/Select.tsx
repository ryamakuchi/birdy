import React from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export interface SelectProps {
  label: string
  name?: string
  value?: string
  values?: string[]
  placeholder?: string
  autoComplete?: string
  disabled?: boolean
  readonly?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  required?: boolean
  size?: 'small' | 'medium' | 'large'
  error?: boolean
  onChange: (value: string) => void
}

export const Select: React.FC<SelectProps> = ({
  label = '',
  name = '',
  value = '',
  values = [],
  placeholder = '',
  autoComplete = '',
  disabled = false,
  readonly = false,
  required = false,
  size = 'medium',
  error = false,
  onChange,
}) => {
  const mode = error
    ? `border-red-500 focus-within:ring-red-500 focus-within:text-red-600${value && ' text-red-600'}`
    : `border-gray-400 text-gray-500 focus-within:border-blue-500 focus-within:ring-blue-500 focus-within:text-blue-600`
  const sizeModeText =
    size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : size === 'large' ? 'text-lg' : ''
  const sizeModeTextFocusWithin =
    size === 'small'
      ? `leading-9 focus-within:text-xs${value ? ' text-xs' : ' text-sm'}`
      : size === 'medium'
      ? `leading-12 focus-within:text-sm${value ? ' text-sm' : ' text-base'}`
      : size === 'large'
      ? `leading-16 focus-within:text-base${value ? ' text-base' : ' text-lg'}`
      : ''
  const sizeModePadding =
    size === 'small'
      ? `px-2 py-3 focus-within:pt-5 focus-within:pb-1${value && ' pt-5 pb-1'}`
      : size === 'medium'
      ? `px-3 py-4 focus-within:pt-6 focus-within:pb-2${value && ' pt-6 pb-2'}`
      : size === 'large'
      ? `px-4 py-5 focus-within:pt-7 focus-within:pb-3${value && ' pt-7 pb-3'}`
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
          value && 'leading-normal',
        ].join(' ')}
      >
        <span className="absolute top-1">{label}</span>
        <select
          className={[
            sizeModeText,
            value || 'opacity-0',
            readonly ? 'pointer-events-none' : '',
            'block w-full text-black transition-all focus:opacity-100',
          ].join(' ')}
          name={name}
          value={value}
          autoComplete={autoComplete}
          disabled={disabled}
          required={required}
          onKeyDown={(event) => readonly && event.key === ' ' && event.preventDefault()}
          onBlur={(event) => onChange(event.target.value)}
        >
          {placeholder && (
            <option selected={!value} disabled value="">
              {placeholder}
            </option>
          )}
          {values.map((v) => (
            <option key={v} value={v} selected={v === value}>
              {v}
            </option>
          ))}
        </select>
      </span>
      {!readonly && (
        <Icon
          icon={faChevronDown}
          size="2x"
          className={[sizeModeText, 'absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none'].join(
            ' '
          )}
        />
      )}
    </label>
  )
}
