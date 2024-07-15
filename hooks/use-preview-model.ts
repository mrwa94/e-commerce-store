import { create } from "zustand";
import { Product } from "@/type";


interface PreviewModelStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  isClose: () => void;
}

const usePreviewModel= create<PreviewModelStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data: data, isOpen: true }),
  isClose: () => set({ isOpen: false }),
}));


export default usePreviewModel;