import React from 'react';
import { OrderDetailsUIProps } from './type';
import styles from './order-details.module.css';
import doneImg from '../../../images/done.svg';

export const OrderDetailsUI: React.FC<OrderDetailsUIProps> = ({ orderNumber }) => (
  <div className={styles.container}>
    <h2 className={`${styles.title} text text_type_digits-large mt-2 mb-4`}>
      {orderNumber}
    </h2>
    <p className="text text_type_main-medium mb-8">
      идентификатор заказа
    </p>
    <img
      className={styles.image}
      src={doneImg}
      alt="Статус заказа: готово"
    />
    <div className={styles.status_messages}>
      <p className="text text_type_main-default mb-1">
        Ваш заказ начали готовить
      </p>
      <p className={`${styles.hint} text text_type_main-default`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  </div>
);