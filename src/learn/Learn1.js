import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Learn1 = () => {
  const [greeting, setGreeting] = useState({
    hello: 'no data'
  });

  const _promise = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3002/api')
        .then((res) => {
          const { data } = res;
          resolve(1)
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }

  const _promise2 = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3002/api')
        .then((res) => {
          const { data } = res;
          resolve(2)
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }
  
  
  useEffect(() => {
    // Promise.all([_promise, _promise2]).then(() => console.log("1, 2"));
    Promise.race([_promise, _promise2]).then(console.log);
  }, []);
  
  return (
    <>
      <div>{greeting.hello}</div>
    </>
  );
}

export default Learn1;