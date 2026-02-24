export const Domin = 'http://localhost:1337';
import {create} from 'zustand';

export const Carde = create((set) => ({
  countent: [],
  AddCarde: (newproduct) =>
    set((state) => ({
      countent: [...state.countent, {...newproduct, qty: 1}],
    })),
  PlassQty: (index) =>
    set((state) => {
      let copy = [...state.countent];
      copy[index].qty++;
      return {countent: copy};
    }),
  Remove: (index) =>
    set((state) => {
      let copy = [...state.countent];
      copy.splice(index, 1);
      return {countent: copy};
    }),
  MinusQty: (index) =>
    set((state) => {
      let copy = [...state.countent];
      if (copy[index].qty > 0) {
        copy[index].qty--;
      } else {
        copy.splice(index, 1);
      }
      return {countent: copy};
    }),
}));
export const Store = create((set) => ({
  selectcat: [],
  Sersh: '',
  SetSearsh: (newSearsh) => set(() => ({Sersh: newSearsh})),
  Setselectcat: (val) => set(() => ({selectcat: val})),
}));
