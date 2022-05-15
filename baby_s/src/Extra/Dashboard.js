import React, { useState, useEffect } from 'react';
import Intro from '../Component/Intro';
import Intro_F from '../Component/User/Intro_F';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setLoading(false);
    } 
    else
    {
      setLoading(true);
    }
  }, []);


  return (
    <div>
      {loading === false ?
      (<Intro/>)
    :
    (<Intro_F/>)}
    </div>
  );
};

export default Dashboard;
