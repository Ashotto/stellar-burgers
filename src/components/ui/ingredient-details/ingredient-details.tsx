import React, { FC, memo } from 'react';
import { IngredientDetailsUIProps } from './type';
import styles from './ingredient-details.module.css';

export const IngredientDetailsUI: FC<IngredientDetailsUIProps> = memo(
  ({ ingredientData, onImageLoad, title, isModalOpen }) => {
    const { carbohydrates, fat, proteins, calories, name, image_large } = ingredientData;
    
    return (
      <div className={styles.content}>
        <img
          src={image_large}
          alt={name}
          className={styles.img}
          onLoad={onImageLoad}
        />
        {!isModalOpen && <h2 className={styles.title}>{title}</h2>}
        <h3 className='text text_type_main-medium mt-2 mb-4'>{name}</h3>
        <ul className={`${styles.nutritional_values} text_type_main-default`}>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Калории, ккал</p>
            <p className='text text_type_digits-default'>{calories}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Белки, г</p>
            <p className='text text_type_digits-default'>{proteins}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Жиры, г</p>
            <p className='text text_type_digits-default'>{fat}</p>
          </li>
          <li className={styles.nutritional_value}>
            <p className={`text mb-2 ${styles.text}`}>Углеводы, г</p>
            <p className='text text_type_digits-default'>{carbohydrates}</p>
          </li>
        </ul>
      </div>
    );
  }
);