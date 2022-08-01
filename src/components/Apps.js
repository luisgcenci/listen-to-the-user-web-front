import React from 'react';
import AuthApp from '../containers/auth-app/AuthApp';
import InternalApp from '../containers/internal-app/InternalApp';
import { useAppSelector } from '../hooks/hooks.ts';

const Apps = () => {
  const authStatus = useAppSelector((state) => state.emailAuth.authStatus);
  
  return (
    <>
      {authStatus ? <InternalApp/> : <AuthApp/>}
    </>
  );
};

export default Apps;
