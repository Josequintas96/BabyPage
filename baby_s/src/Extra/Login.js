import React, { useState, useEffect } from 'react';
import "../ExtraCss/login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      // window.location.replace('http://localhost:3000/');
      window.location.replace('/');
      // window.location.replace("https://gaby-val-future-baby2022.herokuapp.com/dashoboard")
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    };

    // fetch('http://127.0.0.1:8000/api/v1/users/auth/login/', {
    fetch("https://gaby-val-future-baby2022.herokuapp.com/api/v1/users/auth/login/", {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('/');
          // window.location.replace('http://localhost:3000/');
          // window.location.replace("https://gaby-val-future-baby2022.herokuapp.com/dashboard");
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      <div class="login_box">
      {loading === false && <h1>Iniciar sesión</h1>}
      {errors === true && <section class="error_log"><h2 class="error_text">La información dadá no es correcta</h2></section>}
      {loading === false && (
        <form onSubmit={onSubmit}>
          {/* <br /> */}
          <label htmlFor='email'>Correo electronico:</label>
          <br />
          <input
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />{' '}

          <br class="login_space"/>

          <label htmlFor='password'>Contraseña:</label> 
          <br />
              <input
                name='password'
                type='password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />{' '}

          <br class="login_space" />
          <input type='submit' value='Ingresar' 
              class="button-24"/>
        </form>
      )}
      </div>
    </div>
  );
};

export default Login;

