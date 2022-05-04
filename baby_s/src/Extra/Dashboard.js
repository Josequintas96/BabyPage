import React, { useState, useEffect, Fragment } from 'react';
import Intro from '../Component/Intro';
import Intro_F from '../Component/Intro_F';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (localStorage.getItem('token') === null) {
  //     window.location.replace('http://localhost:3000/login');
  //   } else {
  //     fetch('http://127.0.0.1:8000/api/v1/users/auth/user/', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Token ${localStorage.getItem('token')}`
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         setUserEmail(data.email);
  //         setLoading(false);
  //       });
  //   }
  // }, []);

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
