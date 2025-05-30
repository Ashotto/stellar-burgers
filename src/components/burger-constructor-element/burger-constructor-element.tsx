import { FC, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import { 
  removeIngredient, 
  moveIngredientUp, 
  moveIngredientDown 
} from '../../slices/burgerConstructorSlice';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(({ 
  ingredient, 
  index, 
  totalItems 
}) => {
  const dispatch = useDispatch();

  const handleMoveUp = useCallback(() => {
    if (index > 0) {
      dispatch(moveIngredientUp(index));
    }
  }, [dispatch, index]);

  const handleMoveDown = useCallback(() => {
    if (index < totalItems - 1) {
      dispatch(moveIngredientDown(index));
    }
  }, [dispatch, index, totalItems]);

  const handleClose = useCallback(() => {
    dispatch(removeIngredient(ingredient));
  }, [dispatch, ingredient]);

  return (
    <BurgerConstructorElementUI
      ingredient={ingredient}
      index={index}
      totalItems={totalItems}
      handleMoveUp={handleMoveUp}
      handleMoveDown={handleMoveDown}
      handleClose={handleClose}
      isMoveUpDisabled={index === 0}
      isMoveDownDisabled={index === totalItems - 1}
    />
  );
});