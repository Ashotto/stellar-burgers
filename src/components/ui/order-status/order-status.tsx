import React, { FC } from 'react';
import { OrderStatusUIProps } from './type';

export const OrderStatusUI: FC<OrderStatusUIProps> = ({ text, textStyle }) => (
  <span 
    className="text text_type_main-default pt-2" 
    style={{ color: textStyle }}
  >
    {text}
  </span>
);