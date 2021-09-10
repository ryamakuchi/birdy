import { classNames } from './classNames'

describe('classNames', () => {
  test('string', () => {
    expect(classNames('border', 'rounded')).toBe('border rounded')
  })

  test('string and empty string', () => {
    expect(classNames('border', '', 'rounded')).toBe('border rounded')
  })

  test('string and number', () => {
    expect(classNames('border', 1, 'rounded')).toBe('border rounded')
  })

  test('string and boolean', () => {
    expect(classNames('border', false, 'rounded')).toBe('border rounded')
  })

  test('string and undefined', () => {
    expect(classNames('border', undefined, 'rounded')).toBe('border rounded')
  })

  test('string and null', () => {
    expect(classNames('border', null, 'rounded')).toBe('border rounded')
  })
})
