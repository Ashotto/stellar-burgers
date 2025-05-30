import { RootState } from 'src/services/store';

export const selectIsLoading = (state: RootState) => state.order.isLoading;
export const selectOrderError = (state: RootState) => state.order.error;
export const selectOrderModalData = (state: RootState) => state.order.orderModalData;
export const selectUserOrders = (state: RootState) => state.order.userOrders;