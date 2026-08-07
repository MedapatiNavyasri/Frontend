import Student from './Student';
import { useState } from 'react';
function Count() {
  const [count, setCount] = useState(0);
  const countText = <p>You clicked {count} times</p>;
  return (
    <>
      {countText}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
}
function App() {
  const heading = <h1>Hello React!</h1>;
  return (
    <>
      {heading}
      <Count />
    </>
  );
}
export default App;