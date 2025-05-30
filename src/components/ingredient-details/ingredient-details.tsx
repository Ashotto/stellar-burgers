import { FC, useState } from 'react';
import { useParams, useLocation, redirect } from 'react-router-dom';
import { useAppSelector } from '../../services/store';

import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC<{ title?: string }> = ({ title }) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [isImageLoaded, setImageLoaded] = useState(false);

  const { ingredients, isLoading, error } = useAppSelector(
    (state) => state.ingredients
  );

  if (!id) {
    redirect('/');
    return null;
  }

  const ingredientData = ingredients.find((item) => item._id === id);
  const isModalOpen = Boolean(location.state?.background);

  if (isLoading) return <Preloader />;
  if (error) return <p>Ингредиент не найден</p>;
  if (!ingredientData) return null;

  return (
    <>
      {!isImageLoaded && <Preloader />}
      <IngredientDetailsUI
        ingredientData={ingredientData}
        onImageLoad={() => setImageLoaded(true)}
        title={title || 'Детали ингредиента'}
        isModalOpen={isModalOpen}
      />
    </>
  );
};