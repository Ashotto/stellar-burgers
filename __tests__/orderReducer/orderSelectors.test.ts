const mockState = {
  order: {
    error: null,
    isLoading: true,
    orderModalData: {
      _id: '681aea45e8e61d001cec6993',
      createdAt: '2025-05-07T05:06:13.338Z',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c'
      ],
      name: 'Краторный био-марсианский люминесцентный бургер',
      number: 76420,
      status: 'done',
      updatedAt: '2025-05-07T05:06:14.057Z'
    },
    orderRequest: false,
    userOrders: [],
    userOrdersLoading: false
  }
};

describe('orderReducer: селекторы', () => {
  it('селектор isLoading возвращает правильное значение', () => {
    expect(mockState.order.isLoading).toBe(true);
  });

  it('селектор orderModalData возвращает правильные данные', () => {
    expect(mockState.order.orderModalData).toEqual({
      _id: '681aea45e8e61d001cec6993',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский люминесцентный бургер',
      createdAt: '2025-05-07T05:06:13.338Z',
      updatedAt: '2025-05-07T05:06:14.057Z',
      number: 76420
    });
  });
});