import { FC } from 'react';
import { OrderStatusUI } from '@ui';
import { OrderStatusProps } from './type';

const STATUS_TEXT: Record<string, string> = {
  created: 'Создан',
  pending: 'Готовится',
  done: 'Выполнен'
};

const STATUS_COLORS: Record<string, string> = {
  pending: '#E52B1A',
  done: '#00CCCC',
  created: '#F2F2F3'
};

export const OrderStatus: FC<OrderStatusProps> = ({ status }) => {
  const textStyle = STATUS_COLORS[status] || '#F2F2F3';
  const text = STATUS_TEXT[status] || '';

  return <OrderStatusUI textStyle={textStyle} text={text} />;
};