import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { menuItems } from '@/routes';
import type { IMenuItem } from '@/routes/interfaces';

interface MainStore {
  title: string;
  setTitle: (title: string) => void;
  selectedMenuItem: IMenuItem;
  setSelectedMenuItem: (item: IMenuItem) => void;
}

export const useMainStore = create<MainStore>()(
  persist(
    (set) => ({
      title: 'Digital Product',
      setTitle: (title) => set({ title }),
      selectedMenuItem: menuItems[0],
      setSelectedMenuItem: (item) => set({ selectedMenuItem: item }),
    }),
    {
      name: 'main-store',
    }
  )
);
