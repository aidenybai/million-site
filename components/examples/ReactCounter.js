import { useState } from 'react';
import Wrapper from './Wrapper';

export default function Counter({ init }) {
  const [value, setValue] = useState(init);

  return (
    <Wrapper>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>&nbsp;
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </Wrapper>
  );
}
