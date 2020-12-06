import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Learn2 = () => {
  const [greeting, setGreeting] = useState({
    hello: 'no data',
    hello2: 'no data'
  });

  const _promise = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3002/api')
        .then((res) => {
          const { data } = res;
          resolve(data);
        })
    })
  }

  const _async = async () => {
    const result = await _promise();
    
    setGreeting({
      ...greeting,
      hello: result.greeting
    })
  }

  useEffect(() => {
    _async();
  }, []);

  return (
    <>
      <div>{greeting.hello}</div>
    </>
  );
}

export default Learn2;