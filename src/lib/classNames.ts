type Value = string | number | boolean | undefined | null

export const classNames = (...classList: Value[]): string => {
  const _classList = classList.filter((list) => {
    if (list === '' || list === null || list === undefined || typeof list === 'number' || typeof list === 'boolean') {
      return false
    }
    return true
  })
  return _classList.join(' ')
}
