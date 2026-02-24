import {create} from 'zustand';

export const Domin = 'http://localhost:1337';

export const useCard = create((set) => ({
  value: [],
  AddCard: (nweobj) =>
    set((state) => ({value: [...state.value, {...nweobj, qty: 1}]})),
  deleat: (index) =>
    set((stat) => {
      let copy = [...stat.value];
      copy.splice(index, 1);
      return {value: copy};
    }),
  Plass: (index) =>
    set((stat) => {
      let copy = [...stat.value];
      copy[index].qty++;
      return {value: copy};
    }),
  Iculal: (index) =>
    set((stat) => {
      let copy = [...stat.value];
      let Ecual = copy[index].qty;
      if (Ecual > 1) {
        copy[index].qty--;
      }

      return {value: copy};
    }),
}));
export const Catuger = create((set) => ({
  value: null,
  Searsh: '',

  selectCat: (catugr) => set(() => ({value: catugr})),

  SetSearsh: (text) => set(() => ({Searsh: text})),
}));
