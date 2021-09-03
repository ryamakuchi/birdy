import React, { useState, useEffect } from 'react'

export interface TextareaProps {
  label: string
  value?: string
  placeholder?: string
  autoComplete?: string
  rows?: number
  fixedHeight?: `${number}px`
  disabled?: boolean
  readonly?: boolean
  maxLength?: number
  minLength?: number
  required?: boolean
  size?: 'small' | 'medium' | 'large'
  error?: boolean
  onChange: (value: string) => void
}

export const Textarea: React.FC<TextareaProps> = ({
  label = '',
  value = '',
  placeholder = '',
  autoComplete = '',
  rows = 2,
  fixedHeight = null,
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
    ? `border-red-500 focus-within:ring-red-500 focus-within:text-red-600${value && ' text-red-600'}`
    : `border-gray-400 focus-within:border-blue-500 focus-within:ring-blue-500 focus-within:text-blue-600${
        value && ' text-gray-500'
      }`
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

  const textarea = React.createRef<HTMLTextAreaElement>()
  const [height, setHeight] = useState<string>(
    textarea.current?.scrollHeight ? `${textarea.current.scrollHeight}px` : 'auto'
  )

  useEffect(() => {
    const resetHeight = new Promise((resolve) => {
      resolve(setHeight('auto'))
    })
    resetHeight.then(() => {
      setHeight(`${textarea.current?.scrollHeight}px`)
    })
  })

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
        <textarea
          ref={textarea}
          className={[
            sizeModeText,
            'block w-full text-black placeholder-gray-500 placeholder-opacity-0 whitespace-pre transition-all focus:placeholder-opacity-100',
          ].join(' ')}
          style={{ height: fixedHeight ?? height }}
          rows={rows}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          maxLength={maxLength}
          minLength={minLength}
          required={required}
          onChange={(event) => onChange(event.target.value)}
        >
          {value}
        </textarea>
      </span>
    </label>
  )
}
