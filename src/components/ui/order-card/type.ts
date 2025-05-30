import { Location } from 'react-router-dom';
import { TIngredient } from '@utils-types';

type TOrderInfo = {
  _id: string;
  number: number;
  
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  date: Date;
  
  ingredients: string[];
  ingredientsInfo: TIngredient[];
  ingredientsToShow: TIngredient[];
  remains: number;
  
  total: number;
};

export type OrderCardUIProps = {
  orderInfo: TOrderInfo;
  maxIngredients: number;
  
  locationState: { background: Location };
};