import React, { FC, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon, FormattedDate } from '@zlden/react-developer-burger-ui-components';
import { OrderStatus } from '@components';
import { OrderCardUIProps } from './type';
import styles from './order-card.module.css';

export const OrderCardUI: FC<OrderCardUIProps> = memo(({ 
  orderInfo, 
  maxIngredients, 
  locationState 
}) => {
  const location = useLocation();
  const isProfileOrdersPage = location.pathname === '/profile/orders';

  const formatOrderNumber = (num: number) => `#${String(num).padStart(6, '0')}`;

  return (
    <Link
      to={orderInfo.number.toString()}
      relative="path"
      state={locationState}
      className={`p-6 mb-4 mr-2 ${styles.order}`}
    >
      {/* Order Header */}
      <div className={styles.order_header}>
        <span className={`text text_type_digits-default ${styles.number}`}>
          {formatOrderNumber(orderInfo.number)}
        </span>
        <FormattedDate 
          date={orderInfo.date} 
          className="text text_type_main-default text_color_inactive" 
        />
      </div>

      {/* Order Details */}
      <div className={styles.order_body}>
        <h4 className={`pt-6 text text_type_main-medium ${styles.order_name}`}>
          {orderInfo.name}
        </h4>
        
        {isProfileOrdersPage && (
          <OrderStatus status={orderInfo.status} />
        )}
      </div>

      {/* Order Footer */}
      <div className={`pt-6 ${styles.order_footer}`}>
        <ul className={styles.ingredients_list}>
          {orderInfo.ingredientsToShow.map((ingredient, index) => {
            const isLastIngredient = index === maxIngredients - 1;
            const zIndex = maxIngredients - index;
            const right = 20 * index;

            return (
              <li
                className={styles.ingredient_item}
                style={{ zIndex, right }}
                key={ingredient._id}
              >
                <img
                  className={styles.ingredient_image}
                  src={ingredient.image_mobile}
                  alt={ingredient.name}
                  style={{ opacity: isLastIngredient && orderInfo.remains ? 0.5 : 1 }}
                />
                {isLastIngredient && orderInfo.remains > 0 && (
                  <span className={`text text_type_digits-default ${styles.remains}`}>
                    +{orderInfo.remains}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className={styles.price_container}>
          <span className={`text text_type_digits-default ${styles.order_total}`}>
            {orderInfo.total}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
});