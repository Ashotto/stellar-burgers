import store, { rootReducer } from '../src/services/store';

describe('rootReducer', () => {
  it('должен возвращать корректное начальное состояние при неизвестном экшене', () => {
    const nextState = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
    const initialState = store.getState();

    expect(nextState).toEqual(initialState);
  });
});