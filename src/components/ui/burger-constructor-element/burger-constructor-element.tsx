import { memo, FC } from 'react';
import { ConstructorElement, MoveButton } from '@zlden/react-developer-burger-ui-components';
import styles from './burger-constructor-element.module.css';
import { BurgerConstructorElementUIProps } from './type';

export const BurgerConstructorElementUI: FC<BurgerConstructorElementUIProps> = memo(
  ({
    ingredient,
    index,
    totalItems,
    handleClose,
    handleMoveUp,
    handleMoveDown
  }) => (
    <li className={`${styles.element} mb-4 mr-2`}>
      <MoveButton
        isUpDisabled={index === 0}
        isDownDisabled={index === totalItems - 1}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
      />
      <div className={`${styles.element_fullwidth} ml-2`}>
        <ConstructorElement
          thumbnail={ingredient.image}
          text={ingredient.name}
          price={ingredient.price}
          handleClose={handleClose}
        />
      </div>
    </li>
  )
);