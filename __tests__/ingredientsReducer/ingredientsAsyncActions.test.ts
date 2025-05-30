import { TIngredient } from '../../src/utils/types';
import ingredientsReducer, {
  fetchIngredients
} from '../../src/slices/ingredientSlice';

const mockIngredient: TIngredient = {
  calories: 4242,
  carbohydrates: 242,
  fat: 142,
  image: 'https://code.s3.yandex.net/react/code/meat-01.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
  name: 'Биокотлета из марсианской Магнолии',
  price: 424,
  proteins: 420,
  type: 'main',
  _id: '643d69a5c3f7b9001cfa0941'
};

describe('ingredients reducer', () => {
  it('обрабатывает fetchIngredients.rejected', () => {
    const state = ingredientsReducer(undefined, {
      type: fetchIngredients.rejected.type,
      payload: 'Ошибка загрузки ингредиентов'
    });
    
    expect(state).toEqual({
      error: 'Ошибка загрузки ингредиентов',
      ingredients: [],
      isLoading: false
    });
  });

  it('обрабатывает fetchIngredients.fulfilled', () => {
    const state = ingredientsReducer(undefined, {
      type: fetchIngredients.fulfilled.type,
      payload: [mockIngredient]
    });
    
    expect(state).toEqual({
      error: null,
      ingredients: [mockIngredient],
      isLoading: false
    });
  });

  it('обрабатывает fetchIngredients.pending', () => {
    const state = ingredientsReducer(undefined, {
      type: fetchIngredients.pending.type
    });
    
    expect(state).toEqual({
      error: null,
      ingredients: [],
      isLoading: true
    });
  });
});