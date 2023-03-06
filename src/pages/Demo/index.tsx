import { useState } from 'react';

import reactLogo from '@/assets/react.svg';
import { VITE_APP_TITLE, VITE_TITLE_VISIBLE } from '@c/constant';

const Demo = () => {
  const [count, setCount] = useState(0);
  const title: string = VITE_APP_TITLE;
  const showTitle: boolean = VITE_TITLE_VISIBLE;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {showTitle ? <h1>{title}</h1> : null}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        {count > 0 ? (
          <p>
            <code>The count is now: {count}</code>
          </p>
        ) : null}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default Demo;
