import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Learn1 = () => {
  const [greeting, setGreeting] = useState({
    hello: 'no data'
  });

  const _promise = (param) => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3002/api')
        .then((res) => {
          if(param) {
            resolve(res);
          } else {
            reject('error');
          }
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
  
  useEffect(() => {
    _promise(true)
      .then((res) => {
        const { data } = res;
        setGreeting({
          hello: data.greeting,
        })
      }, (err) => {
        console.log(err);
      })
  }, []);
  
  return (
    <>
      <div>{greeting.hello}</div>
    </>
  );
}

export default Learn1;