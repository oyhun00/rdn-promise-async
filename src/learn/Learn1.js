import React, { useEffect } from 'react';
import axios from 'axios';

const Learn1 = () => {
  useEffect(() => {
    axios.get('http://localhost:3002/api')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  });
  
  return (
    <>
      <div>hi</div>
    </>
  );
}

export default Learn1;