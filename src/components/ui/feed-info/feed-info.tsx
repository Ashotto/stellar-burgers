import React, { FC, memo } from 'react';
import styles from './feed-info.module.css';
import { FeedInfoUIProps, HalfColumnProps, TColumnProps } from './type';

const Column: FC<TColumnProps> = memo(({ title, content }) => (
  <div className={styles.fullColumn}>
    <h3 className={`text text_type_main-medium ${styles.title}`}>{title}:</h3>
    <p className={`text text_type_digits-large ${styles.content}`}>{content}</p>
  </div>
));

const HalfColumn: FC<HalfColumnProps> = memo(({ orders, title, textColor = 'default' }) => {
  const colorStyle = {
    color: textColor === 'blue' ? '#00cccc' : '#F2F2F3'
  };

  return (
    <div className={styles.halfColumn}>
      <h3 className={`text text_type_main-medium ${styles.title}`}>{title}:</h3>
      <ul className={styles.list}>
        {orders.map((item) => (
          <li
            className={`text text_type_digits-default ${styles.listItem}`}
            style={colorStyle}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export const FeedInfoUI: FC<FeedInfoUIProps> = memo(({ feed, readyOrders, pendingOrders }) => (
  <section className={styles.container}>
    <div className={styles.columns}>
      <HalfColumn
        orders={readyOrders}
        title="Готовы"
        textColor="blue"
      />
      <HalfColumn 
        orders={pendingOrders} 
        title="В работе" 
      />
    </div>
    <Column title="Выполнено за все время" content={feed.total} />
    <Column title="Выполнено за сегодня" content={feed.totalToday} />
  </section>
));