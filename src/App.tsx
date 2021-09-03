import React, { useState } from 'react'
import { Anchor } from './components/Anchor'
import { Button } from './components/Button'
import { InputText } from './components/InputText'
import { Checkbox } from './components/Checkbox'
import { Radio } from './components/Radio'
import logo from './logo.svg'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const list = [
    { value: '1', children: 'バリュー1' },
    { value: '2', children: 'バリュー2' },
    { value: '3', children: 'バリュー3' },
  ]

  const [checkedCheckbox, setCheckedCheckbox] = useState<string[]>([])
  const onChangeCheckbox = (values: string[]) => {
    setCheckedCheckbox(values)
  }

  const [checkedRadio, setCheckedRadio] = useState('')
  const onChangeRadio = (value: string) => setCheckedRadio(value)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Anchor href="https://reactjs.org">Learn React</Anchor>
          {' | '}
          <Anchor href="https://vitejs.dev/guide/features.html">Vite Docs</Anchor>
        </p>
        <div>
          <InputText label="InputText" value={text} onChange={(value) => setText(value)} />
        </div>
        <div className="flex">
          {list.map((check) => (
            <Checkbox
              key={check.value}
              name="checkbox"
              value={check.value}
              checkedValues={checkedCheckbox}
              onChange={onChangeCheckbox}
            >
              {check.children}
            </Checkbox>
          ))}
        </div>
        <div className="flex">
          {list.map((radio) => (
            <Radio
              key={radio.value}
              name="checkbox"
              value={radio.value}
              checkedValue={checkedRadio}
              onChange={onChangeRadio}
            >
              {radio.children}
            </Radio>
          ))}
        </div>
      </header>
    </div>
  )
}
