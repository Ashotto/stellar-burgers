import { FC, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import {
  useAppDispatch,
  useAppSelector
} from '../../services/store';
import {
  fetchOrderBurger,
  resetOrderModalData
} from '../../slices/orderSlice';
import { resetConstructor } from '../../slices/burgerConstructorSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Selectors
  const { bun, ingredients } = useAppSelector(
    (state) => state.burgerConstructor
  );
  const isAuthenticated = useAppSelector(
    (state) => state.user.isAuthenticated
  );
  const { orderModalData, orderRequest } = useAppSelector(
    (state) => state.order
  );

  // Memoized constructor items
  const constructorItems = useMemo(() => ({
    bun: bun ?? null,
    ingredients: ingredients ?? []
  }), [bun, ingredients]);

  // Calculate total price
  const price = useMemo(() => (
    (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
    constructorItems.ingredients.reduce(
      (sum: number, item: TConstructorIngredient) => sum + item.price,
      0
    )
  ), [constructorItems]);

  // Order handling
  const handleOrderClick = useCallback(async () => {
    if (!constructorItems.bun || orderRequest) return;

    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const orderIds = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((item) => item._id),
      constructorItems.bun._id
    ];

    try {
      await dispatch(fetchOrderBurger(orderIds));
      dispatch(resetConstructor());
    } catch (error) {
      console.error('Order failed:', error);
    }
  }, [constructorItems, orderRequest, isAuthenticated, navigate, dispatch]);

  // Modal handling
  const handleCloseModal = useCallback(() => {
    dispatch(resetOrderModalData());
  }, [dispatch]);

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={handleOrderClick}
      closeOrderModal={handleCloseModal}
    />
  );
};