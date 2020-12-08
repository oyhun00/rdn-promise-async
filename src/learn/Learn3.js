import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Learn3 = () => {
  const [greeting, setGreeting] = useState({
    hello: 'no data',
  });

  const url = "http://localhost:3002/api";

  const loadData_Promise = async (url) => {
    let _pro = await axios.get(url);

    setGreeting({
      hello: _pro.data.greeting
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