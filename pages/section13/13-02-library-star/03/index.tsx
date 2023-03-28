import { useState } from 'react';
import { Rate } from 'antd';



export default function App(): JSX.Element {
  const [value, setValue] = useState(0);

  return <Rate onChange={(별점) => setValue(별점)} value={value} />
};
