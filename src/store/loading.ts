import { create } from "zustand";

type UseLoading = {
  isLoading: boolean;
  openLoading: () => void;
  closeLoading: () => void;
};

export const useLoading = create<UseLoading>((set) => ({
  isLoading: false,
  openLoading: () =>
    set(() => {
      return { isLoading: true };
    }),
  closeLoading: () =>
    set(() => {
      return { isLoading: false };
    }),
}));
