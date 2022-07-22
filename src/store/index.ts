import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDTO } from "../dtos/User";
import { OrderDTO } from "../dtos/Orders";

interface User {
  user: UserDTO;
  setUser: (user: UserDTO) => void;
  cleanUser: () => void;
}

export const userStore = create(
  persist<User>(
    (set, get) => ({
      user: {} as UserDTO,
      setUser: (user: UserDTO) => set({ user: user }),
      cleanUser: () => set({ user: {} as UserDTO }),
    }),

    {
      name: "rocket-help-user", // name of item in the storage (must be unique)
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

interface Order {
  orders: OrderDTO[];
  setOrders: (order: OrderDTO[]) => void;
  cleanOrders: () => void;
}

export const ordersStore = create(
  persist<Order>(
    (set, get) => ({
      orders: [],
      setOrders(orders: OrderDTO[]) {
        const array: OrderDTO[] = [];
        orders.map((order) => array.push(order));
        set({ orders: array });
      },
      cleanOrders: () => set({ orders: [] }),
    }),

    {
      name: "rocket-help-orders", // name of item in the storage (must be unique)(must be unique)
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
