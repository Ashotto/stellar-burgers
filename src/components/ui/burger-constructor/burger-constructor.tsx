import { FC } from 'react';
import {
  Button,
  ConstructorElement,
  CurrencyIcon
} from '@zlden/react-developer-burger-ui-components';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorElement, Modal } from '@components';
import { Preloader, OrderDetailsUI } from '@ui';
import styles from './burger-constructor.module.css';
import { BurgerConstructorUIProps } from './type';

export const BurgerConstructorUI: FC<BurgerConstructorUIProps> = ({
  price,
  orderRequest,
  constructorItems,
  orderModalData,
  onOrderClick,
  closeOrderModal
}) => (
  <section className={styles.burger_constructor}>
    {constructorItems.bun ? (
      <div className={`${styles.element} mb-4 mr-4`} data-cy="bun">
        <ConstructorElement
          type="top"
          isLocked
          text={`${constructorItems.bun.name} (верх)`}
          thumbnail={constructorItems.bun.image}
          price={constructorItems.bun.price}
        />
      </div>
    ) : (
      <div
        className={`${styles.noBuns} ${styles.noBunsTop} ml-8 mb-4 mr-5 text text_type_main-default`}
        data-cy="bun-constructor"
      >
        Выберите булки
      </div>
    )}

    <ul className={styles.elements} data-cy="ingredients">
      {constructorItems.ingredients.length > 0 ? (
        constructorItems.ingredients.map((item, index) => (
          <BurgerConstructorElement
            key={item.id}
            ingredient={item}
            index={index}
            totalItems={constructorItems.ingredients.length}
          />
        ))
      ) : (
        <div
          className={`${styles.noBuns} ml-8 mb-4 mr-5 text text_type_main-default`}
          data-cy="ingredients-constructor"
        >
          Выберите начинку
        </div>
      )}
    </ul>

    {constructorItems.bun ? (
      <div className={`${styles.element} mt-4 mr-4`} data-cy="bun">
        <ConstructorElement
          type="bottom"
          isLocked
          text={`${constructorItems.bun.name} (низ)`}
          thumbnail={constructorItems.bun.image}
          price={constructorItems.bun.price}
        />
      </div>
    ) : (
      <div
        className={`${styles.noBuns} ${styles.noBunsBottom} ml-8 mb-4 mr-5 text text_type_main-default`}
        data-cy="bun-constructor"
      >
        Выберите булки
      </div>
    )}

    <div className={`${styles.total} mt-10 mr-4`}>
      <div className={`${styles.cost} mr-10`}>
        <p className={`text ${styles.text} mr-2`}>{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={onOrderClick}
      >
        Оформить заказ
      </Button>
    </div>

    {orderRequest && (
      <Modal title="Оформляем заказ..." onClose={closeOrderModal}>
        <Preloader />
      </Modal>
    )}

    {orderModalData && !orderRequest && (
      <Modal title="" onClose={closeOrderModal}>
        <OrderDetailsUI orderNumber={orderModalData.number} />
      </Modal>
    )}
  </section>
);