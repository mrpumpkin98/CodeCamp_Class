import { useState } from 'react';
import { Rate } from 'antd';



export default function App(): JSX.Element {
  const [value, setValue] = useState(0);

  const onChange = (별점) => setValue(별점);

  return (
      <Rate onChange={onChange} value={value} />
  );
};
