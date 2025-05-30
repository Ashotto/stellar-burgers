import { newOrder } from '../../src/utils/types';
import reducer, {
  fetchOrderBurger,
  fetchOrderByNumber,
  fetchOrders,
  initialState
} from '../../src/slices/orderSlice';

const exampleOrder = {
  number: 76420,
  _id: '681aea45e8e61d001cec6993',
  name: 'Краторный био-марсианский люминесцентный бургер',
  status: 'done',
  ingredients: [
    '643d69a5c3f7b9001cfa093c',
    '643d69a5c3f7b9001cfa0941',
    '643d69a5c3f7b9001cfa093e', 
    '643d69a5c3f7b9001cfa093c'
  ],
  createdAt: '2025-05-07T05:06:13.338Z',
  updatedAt: '2025-05-07T05:06:14.057Z'
};

describe('orderReducer: асинхронные экшены', () => {
  it('fetchOrderBurger.fulfilled сохраняет orderModalData', () => {
    const nextState = reducer(initialState, {
      type: fetchOrderBurger.fulfilled.type,
      payload: { order: exampleOrder }
    });

    expect(nextState.orderModalData).toEqual(exampleOrder);
    expect(nextState.orderRequest).toBe(false);
    expect(nextState.isLoading).toBe(false);
  });

  it('fetchOrderByNumber.fulfilled сохраняет orderModalData', () => {
    const nextState = reducer(initialState, {
      type: fetchOrderByNumber.fulfilled.type,
      payload: exampleOrder
    });

    expect(nextState.isLoading).toBe(false);
    expect(nextState.orderRequest).toBe(false);
    expect(nextState.orderModalData).toEqual(exampleOrder);
  });

  it('fetchOrders.fulfilled сохраняет userOrders', () => {
    const nextState = reducer(initialState, {
      type: fetchOrders.fulfilled.type,
      payload: [exampleOrder]
    });

    expect(nextState.userOrdersLoading).toBe(false);
    expect(nextState.error).toBeNull();
    expect(nextState.userOrders).toEqual([exampleOrder]);
  });
});