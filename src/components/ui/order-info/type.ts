import { TIngredient } from '@utils-types';

type TOrderInfo = {
  _id: string;
  number: number;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  ingredients: string[];
  ingredientsInfo: {
    [key: string]: TIngredient & { count: number };
  };
  date: Date;
  total: number;
};

export type OrderInfoUIProps = {
  orderInfo: TOrderInfo;
  title?: string;
  isModalOpen?: boolean;
};