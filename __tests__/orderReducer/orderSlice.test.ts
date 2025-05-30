import reducer, {
  resetOrderModalData,
  initialState
} from '../../src/slices/orderSlice';

const exampleOrder = {
  number: 76420,
  _id: '681aea45e8e61d001cec6993',
  ingredients: [
    '643d69a5c3f7b9001cfa093c',
    '643d69a5c3f7b9001cfa0941',
    '643d69a5c3f7b9001cfa093e',
    '643d69a5c3f7b9001cfa093c'
  ],
  name: 'Краторный био-марсианский люминесцентный бургер',
  status: 'done',
  createdAt: '2025-05-07T05:06:13.338Z',
  updatedAt: '2025-05-07T05:06:14.057Z'
};

describe('orderReducer: обычные редьюсеры', () => {
  test('resetOrderModalData должен очищать orderModalData', () => {
    const nextState = reducer(
      {
        ...initialState,
        orderModalData: exampleOrder
      },
      resetOrderModalData()
    );

    expect(nextState.orderModalData).toBeNull();
  });
});