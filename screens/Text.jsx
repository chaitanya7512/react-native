import React, { useState } from 'react';

function MyComponent() {
  const [status, setStatus] = useState('loading');

  let content;
  switch (status) {
    case 'loading':
      content = <p>Loading...</p>;
      break;
    case 'success':
      content = <p>Data loaded successfully!</p>;
      break;
    case 'error':
      content = <p>Error occurred!</p>;
      break;
    default:
      content = <p>Unknown status</p>;
  }

  return <div>{content}</div>;
}

export default MyComponent;
