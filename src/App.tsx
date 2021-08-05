import React, { useState } from 'react'
import { Anchor } from './components/Anchor'
import logo from './logo.svg'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Anchor href="https://reactjs.org">Learn React</Anchor>
          {' | '}
          <Anchor href="https://vitejs.dev/guide/features.html">Vite Docs</Anchor>
        </p>
      </header>
    </div>
  )
}
