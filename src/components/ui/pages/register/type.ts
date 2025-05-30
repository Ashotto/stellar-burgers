import { Dispatch, SetStateAction } from 'react';
import { PageUIProps } from '../common-type';

export type RegisterUIProps = PageUIProps & {
  userName: string;
  password: string;
  setUserName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
};