import { useState } from 'react';
import { Rate } from 'antd';



export default function App(): JSX.Element {
  const [value, setValue] = useState(0);
  console.log(value)
  return <Rate onChange={setValue} value={value} />
};
