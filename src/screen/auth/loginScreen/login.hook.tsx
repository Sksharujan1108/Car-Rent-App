import {useState} from 'react';
import {ILogInProps} from './login.props';

export const useSignin = (): ILogInProps => {
  const [isSecure, setIsSecure] = useState(false);
  return {
    isSecure,
    setIsSecure,
  };
};
