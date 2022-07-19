import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  user: UserData;
  setUser: (user: UserData) => void;
  cleanUser: () => void;
}

interface UserData {
  name: string;
  photo: string;
  email: string;
}

export const useStore = create(
  persist<User>(
    (set, get) => ({
      user: {} as UserData,
      setUser: (user: UserData) => set({ user: user }),
      cleanUser: () => set({ user: {} as UserData }),
    }),
    {
      name: "rocket-help", // name of item in the storage (must be unique)
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
