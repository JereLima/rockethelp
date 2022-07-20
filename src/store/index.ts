import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDTO } from "../dtos/User";

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
      name: "rocket-help", // name of item in the storage (must be unique)
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
