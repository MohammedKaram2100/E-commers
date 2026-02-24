import axios from 'axios';
import {Domin, Store} from '../store/Index';

export default function usHome() {
  const {selectcat} = Store();

  const Products = () => {
    return axios
      .get(Domin + '/api/products?', {
        params: {
          populate: {
            img: true,
            categorie: true,
          },
          filters:
            selectcat.length > 0
              ? {
                  categorie: {
                    name: {
                      $in: selectcat,
                    },
                  },
                }
              : {},
        },
      })
      .then((res) => {
        console.log(res.data.data);
        return res.data.data;
      });
  };

  const Cateygues = () => {
    return axios.get(Domin + '/api/categories').then((res) => res.data.data);
  };

  return {Products, Cateygues};
}
