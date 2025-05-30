import { memo, FC } from 'react';
import { Link } from 'react-router-dom';
import { 
  Counter, 
  CurrencyIcon, 
  AddButton 
} from '@zlden/react-developer-burger-ui-components';
import styles from './burger-ingredient.module.css';
import { TBurgerIngredientUIProps } from './type';
import { ErrorMessage } from 'src/components/error/error';

export const BurgerIngredientUI: FC<TBurgerIngredientUIProps> = memo(
  ({ ingredient, count, handleAdd, locationState }) => {
    const { name, price, image, _id } = ingredient;

    return (
      <li className={styles.container}>
        <Link
          to={`/ingredients/${_id}`}
          className={styles.article}
          state={locationState}
        >
          {count && <Counter count={count} />}
          <img className={styles.img} src={image} alt="картинка ингредиента." />
          <div className={`${styles.cost} mt-2 mb-2`}>
            <p className="text text_type_digits-default mr-2">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${styles.text}`}>{name}</p>
        </Link>
        <AddButton
          text="Добавить"
          extraClass={`${styles.addButton} mt-8`}
          onClick={handleAdd}
        />
      </li>
    );
  }
);