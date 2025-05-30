import modalReducer, {
  closeModal,
  openModal
} from '../../src/slices/modalSlice';

describe('modalReducer', () => {
  const initialState = {
    isOpen: false,
    title: ''
  };

  it('должен закрыть модальное окно с переданным title', () => {
    const state = modalReducer(initialState, closeModal('Test Title'));

    expect(state.title).toBe('Test Title');
    expect(state.isOpen).toBe(false);
  });

  it('должен открыть модальное окно', () => {
    const state = modalReducer(initialState, openModal());

    expect(state.title).toBe('');
    expect(state.isOpen).toBe(true);
  });
});