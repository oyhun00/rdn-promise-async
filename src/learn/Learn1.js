import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Learn1 = () => {
  const [greeting, setGreeting] = useState({
    hello: 'no data',
    hello2: 'no data'
  });

  // state = {
  //   hello: 'no data',
  //   hello2: 'no data'
  // }

  const _promise = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3002/api')
        .then((res) => {
          console.log(1)
          const { data } = res;
          setGreeting({
            ...greeting,
            hello: data.greeting
          })
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }

  const _promise2 = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3002/api/test')
        .then((res) => {
          console.log(2)
          const { data } = res;
          setGreeting({
            ...greeting,
            hello2: data.greeting2
          })
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }
  
  
  useEffect(() => {
    _promise().then(_promise2)
  }, [_promise]);
  
  return (
    <>
      <div>{greeting.hello}</div>
      <div>{greeting.hello2}</div>
    </>
  );
}

export default Learn1;