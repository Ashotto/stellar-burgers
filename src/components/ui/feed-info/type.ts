export type TColumnProps = {
  title: string;
  content: number;
};

export type HalfColumnProps = {
  orders: number[];
  title: string;
  textColor?: 'default' | 'success'; // конкретизировал возможные значения
};

export type FeedInfoUIProps = {
  feed: {
    total: number;
    totalToday: number;
  };
  readyOrders: number[];
  pendingOrders: number[];
};