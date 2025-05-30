describe('ingredients selectors', () => {
  const state = {
    ingredients: {
      error: 'Ошибка загрузки',
      ingredients: [{
        __v: 0,
        _id: '1',
        calories: 200,
        carbohydrates: 20,
        fat: 5,
        image: '',
        image_large: '',
        image_mobile: '',
        name: 'Булка',
        price: 100,
        proteins: 10,
        type: 'bun'
      }],
      isLoading: true
    }
  };

  it('возвращает error из state.ingredients', () => {
    expect(state.ingredients.error).toBe('Ошибка загрузки');
  });

  it('возвращает все значения через деструктуризацию', () => {
    const { error, ingredients, isLoading } = state.ingredients;
    expect(error).toBe('Ошибка загрузки');
    expect(ingredients).toEqual([{
      _id: '1',
      name: 'Булка',
      type: 'bun',
      proteins: 10,
      fat: 5,
      carbohydrates: 20,
      calories: 200,
      price: 100,
      image: '',
      image_mobile: '',
      image_large: '',
      __v: 0
    }]);
    expect(isLoading).toBe(true);
  });

  it('возвращает ingredients из state.ingredients', () => {
    expect(state.ingredients.ingredients).toEqual([{
      __v: 0,
      _id: '1',
      calories: 200,
      carbohydrates: 20,
      fat: 5,
      image: '',
      image_large: '',
      image_mobile: '',
      name: 'Булка',
      price: 100,
      proteins: 10,
      type: 'bun'
    }]);
  });

  it('возвращает isLoading из state.ingredients', () => {
    expect(state.ingredients.isLoading).toBe(true);
  });
});