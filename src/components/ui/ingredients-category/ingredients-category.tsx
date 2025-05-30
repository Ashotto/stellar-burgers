import { forwardRef } from 'react';
import { BurgerIngredient } from '@components';
import { TIngredientsCategoryUIProps } from './type';
import styles from './ingredients-category.module.css';

export const IngredientsCategoryUI = forwardRef<HTMLUListElement, TIngredientsCategoryUIProps>(
  ({ title, titleRef, ingredients, ingredientsCounters }, ref) => (
    <section className={styles.category} aria-labelledby={`category-${title}`}>
      <h3 
        id={`category-${title}`}
        className="text text_type_main-medium mt-10 mb-6" 
        ref={titleRef}
      >
        {title}
      </h3>
      <ul className={styles.items} ref={ref} role="list">
        {ingredients.map((ingredient) => (
          <li key={ingredient._id} className={styles.item}>
            <BurgerIngredient
              ingredient={ingredient}
              count={ingredientsCounters[ingredient._id]}
            />
          </li>
        ))}
      </ul>
    </section>
  )
);