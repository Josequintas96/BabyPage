import React, { useState, useEffect } from 'react';
import "../../ExtraCss/login.css"

const New_user = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password : password1,
      password1: password1,
      password2: password2
    };
    // {
    //   name: name,
    //   email: email,
    //   password : password1,
    //   password1: password1,
    //   password2: password2
    // }

    // fetch('http://127.0.0.1:8000/api/v1/users/auth/register/', {
    fetch('https://gaby-val-future-baby2022.herokuapp.com/api/v1/users/auth/register/', {
    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          // localStorage.clear();
          // localStorage.setItem('token', data.key);
          window.location.replace('/');
        } else {
          setEmail('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      <div class="login_box">
          {loading === false && <h1>Nuevo Usuario</h1>}
          {errors === true && <section class="error_log"> <h2 class="error_text" > No puede ingresar con la clave dada </h2> </section>}
          <form onSubmit={onSubmit}>
            <label htmlFor='name'>Nombre:</label> <br />
            <input
              name='name'
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />{' '}

            <br class="login_space" />


            <label htmlFor='email'>Correo electronico:</label> <br />
            <input
              name='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />{' '}

            <br class="login_space" />
            <label htmlFor='password1'>Contraseña:</label> <br />
            <input
              name='password1'
              type='password'
              value={password1}
              onChange={e => setPassword1(e.target.value)}
              required
            />{' '}

            <br class="login_space"/>
            <label htmlFor='password2'>Confirmar Contraseña:</label> <br />
            <input
              name='password2'
              type='password'
              value={password2}
              onChange={e => setPassword2(e.target.value)}
              required
            />{' '}
            
            <br class="login_space" />

            <input type='submit' value='Nuevo Usuario'
              class="button-24" />
          </form>
      </div>
    </div>
  );
};

export default New_user;


