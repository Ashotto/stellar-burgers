import { FC, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { Modal } from '../modal';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchOrderByNumber } from '../../slices/orderSlice';
import { TIngredient } from '@utils-types';

type TIngredientsWithCount = {
  [key: string]: TIngredient & { count: number };
};

export const OrderInfo: FC<{ title?: string }> = ({ title }) => {
  const { number } = useParams<{ number: string }>();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { ingredients } = useAppSelector((state) => state.ingredients);
  const { orderModalData: orderData, isLoading } = useAppSelector((state) => state.order);
  const isModalOpen = location.state?.background;

  useEffect(() => {
    dispatch(fetchOrderByNumber(Number(number)));
  }, [dispatch, number]);

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    const ingredientsInfo = orderData.ingredients.reduce<TIngredientsWithCount>(
      (acc, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) acc[item] = { ...ingredient, count: 1 };
        } else {
          acc[item].count++;
        }
        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return { ...orderData, ingredientsInfo, date, total };
  }, [orderData, ingredients]);

  if (isLoading || !orderInfo) return <Preloader />;

  return (
    <OrderInfoUI
      orderInfo={orderInfo}
      isModalOpen={!!isModalOpen}
      title={title}
    />
  );
};