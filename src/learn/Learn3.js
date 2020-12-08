import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Learn3 = () => {
  const [greeting, setGreeting] = useState({
    hello: 'no data',
  });

  const url = "http://localhost:3002/api";

  const wait = async () => {
    await new Promise (resolve => setTimeout(resolve, 1000));

    return 10;
  }

  const f = () => {
    wait().then(alert);
  }


  useEffect(() => {
    f();
  }, []);

  return (
    <>
      <div>{greeting.hello}</div>
    </>
  );
}

export default Learn3;