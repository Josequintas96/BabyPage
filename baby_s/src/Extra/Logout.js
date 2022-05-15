import React, { useState, useEffect, Fragment } from 'react';
import "../ExtraCss/login.css"

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('/login');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    // fetch('http://127.0.0.1:8000/api/v1/users/auth/logout/', {
    fetch("https://gaby-val-future-baby2022.herokuapp.com/api/v1/users/auth/logout/", { 
      // "https://gaby-val-future-baby2022.herokuapp.com.herokuapp.com/"
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('/login');
      });
  };

  const handleLogout2 = e => {
    e.preventDefault();    
    window.location.replace('/');

  };

  return (
    <div>
      <div class="login_box">
      {loading === false && (
        <Fragment>
          <h1>Están seguros que deseas dejar la paginá?</h1>
          <input type='button' value='Si' onClick={handleLogout} 
                class="button-24"/>
          <input type='button' value='No' onClick={handleLogout2} 
                class="button-24"/>
        </Fragment>
      )}
      </div>
    </div>
  );
};

export default Logout;