import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Learn3 = () => {
  const [greeting, setGreeting] = useState({
    hello: 'no data',
  });

  const url = "http://localhost:3002/api";

  const loadData = (url) => {
    return axios.get(url)
      .then(res => {
        if (res) {
          const { data } = res;
          setGreeting({
            hello: data.greeting
          })
        } else {
          throw new Error('err');
        }
      })
  }

  const loadData_Promise = async (url) => {
    let _pro = new Promise((resolve, reject) => {
      axios.get(url)
      .then(res => {
        if (res) {
          const { data } = res;
          resolve(data.greeting);
        } else {
          reject('err');
        }
      })
    })

    setGreeting({
      hello: await _pro
    })
  }


  useEffect(() => {
    loadData_Promise(url);
  }, []);

  return (
    <>
      <div>{greeting.hello}</div>
    </>
  );
}

export default Learn3;