import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Learn3 = () => {
  const [greeting, setGreeting] = useState({
    hello: 'no data',
  });

  const url = "http://localhost:3002/apia";

  const loadData_Promise = async (url) => {
    let _pro = 'default';
    try {
      _pro = await axios.get(url);
      
      setGreeting({
        hello: _pro.data.greeting
      })
    } catch(err) {
      console.log(err);
    }

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