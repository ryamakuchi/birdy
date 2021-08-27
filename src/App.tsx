import React, { useState } from 'react'
import { Anchor } from './components/Anchor'
import { Button } from './components/Button'
import { InputText } from './components/InputText'
import logo from './logo.svg'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

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
      </header>
    </div>
  )
}
