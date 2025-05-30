import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type modalStateType = {
  isOpen: boolean;
  title: string;
};

const initialState: modalStateType = {
  isOpen: false,
  title: ''
};

const modalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      state.title = '';
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.isOpen = false;
      state.title = action.payload;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;