import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

export type PageUIProps = {
  email: string;
  errorText?: string;
  setEmail: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: SyntheticEvent) => void;
};