import React, {useState} from 'react';
import './css/Login.css';
import { useAppDispatch } from '../hooks/hooks.ts';
import { updateEmail } from '../store/features/emailAuthSlice'
import firebase from '../containers/firebase/config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const dispatch = useAppDispatch();
  // const phoneProvider = new firebase.auth.PhoneAuthProvider();

  const logIn = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    // <form className='Login' onSubmit={logIn}>
    <div className='Login'>
      <div className='Username'>
        <label>E-mail</label>
        <input
          type='email'
          placeholder='you@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='Password'>
        <label>Password</label>
        <input 
          type='password'
          placeholder='Digite sua senha'
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
      </div>
      <div className='Password'>
        <button onClick={logIn}>Clica Aqui Mané</button>
        {/* <input 
          type='submit' 
        />           */}
      </div>
    </div>
    // </form>
  )
}

export default Login;
