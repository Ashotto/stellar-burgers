import React, { FC, memo } from 'react';
import { CurrencyIcon, FormattedDate } from '@zlden/react-developer-burger-ui-components';
import { OrderStatus } from '@components';
import { OrderInfoUIProps } from './type';
import styles from './order-info.module.css';

export const OrderInfoUI: FC<OrderInfoUIProps> = memo(({ 
  orderInfo, 
  isModalOpen, 
  title 
}) => (
  <div className={styles.wrap}>
    {!isModalOpen && title && (
      <h2 className={styles.title}>{title}</h2>
    )}
    
    <h3 className={`text text_type_main-medium pb-3 pt-10 ${styles.header}`}>
      {orderInfo.name}
    </h3>
    
    <OrderStatus status={orderInfo.status} />
    
    <section className={styles.ingredients_section}>
      <p className="text text_type_main-medium pt-15 pb-6">Состав:</p>
      <ul className={`${styles.list} mb-8`}>
        {Object.values(orderInfo.ingredientsInfo).map((item) => (
          <li className={`pb-4 pr-6 ${styles.item}`} key={item._id}>
            <div className={styles.img_container}>
              <div className={styles.img_border}>
                <img
                  className={styles.img}
                  src={item.image_mobile}
                  alt={item.name}
                />
              </div>
            </div>
            <span className="text text_type_main-default pl-4">
              {item.name}
            </span>
            <div className={styles.price_wrapper}>
              <span className={`text text_type_digits-default ${styles.quantity}`}>
                {item.count} × {item.price}
              </span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
      </ul>
    </section>
    
    <footer className={styles.footer}>
      <FormattedDate 
        date={orderInfo.date} 
        className="text text_type_main-default text_color_inactive" 
      />
      <div className={styles.total_wrapper}>
        <span className={`text text_type_digits-default ${styles.total}`}>
          {orderInfo.total}
        </span>
        <CurrencyIcon type="primary" />
      </div>
    </footer>
  </div>
));