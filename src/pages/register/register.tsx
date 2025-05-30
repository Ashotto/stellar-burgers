import { FC, SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { TRegisterData } from '@api';
import { RegisterUI } from '@ui-pages';
import { fetchLoginUser, fetchRegisterUser } from '../../slices/userSlice';

export const Register: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.user.error);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    
    const userData: TRegisterData = {
      name,
      email,
      password
    };

    const resultAction = await dispatch(fetchRegisterUser(userData));

    if (fetchRegisterUser.fulfilled.match(resultAction)) {
      dispatch(fetchLoginUser({ 
        email: userData.email, 
        password: userData.password 
      }));
    }
  };

  return (
    <RegisterUI
      errorText={error?.message}
      email={email}
      userName={name}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setName}
      handleSubmit={handleSubmit}
    />
  );
};