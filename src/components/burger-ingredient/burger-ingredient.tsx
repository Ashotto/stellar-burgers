import { FC, memo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';
import { addIngredient, setBun } from '../../slices/burgerConstructorSlice';

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(({ 
  ingredient, 
  count 
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAdd = useCallback(() => {
    if (ingredient.type === 'bun') {
      dispatch(setBun(ingredient));
    } else {
      dispatch(addIngredient({ 
        ...ingredient, 
        id: uuidv4() 
      }));
    }
  }, [dispatch, ingredient]);

  const handleIngredientClick = useCallback(() => {
    navigate(`/ingredients/${ingredient._id}`, {
      state: { background: location }
    });
  }, [ingredient._id, location, navigate]);

  return (
    <BurgerIngredientUI
      ingredient={ingredient}
      count={count}
      locationState={{ background: location }}
      handleAdd={handleAdd}
      onClick={handleIngredientClick}
    />
  );
});