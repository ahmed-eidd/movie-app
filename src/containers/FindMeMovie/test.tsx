import React, { useState } from 'react';

interface testProps {
  test: string;
}

const test: React.FC<testProps> = ({ test }) => {
  const [testState,settest] = useState()
  return <div></div>;
};

export default test;
