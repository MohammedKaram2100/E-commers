import axios from 'axios';
import {useEffect, useState} from 'react';
import Carde from './Carde';
import {Catuger, Domin} from '../Stor/zuztant';

export default function ProViwe() {
  const [Product, SetProduct] = useState([]);
  const [View, SetView] = useState([]);
  const {value, Searsh} = Catuger();
  useEffect(() => {
    let Eioint = '/api/products?populate=*';
    let url = Domin + Eioint;
    axios
      .get(url)
      .then((res) => {
        SetProduct(res.data.data);
        SetView(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log(value);
    if (value) {
      let Eioint = `/api/categories/${value.documentId}`;
      let url = Domin + Eioint;
      axios
        .get(url, {
          params: {
            populate: {
              products: {
                populate: '*',
              },
            },
          },
        })
        .then((res) => {
          SetView(res.data.data.products);
        })
        .catch((err) => console.log(err));
    } else {
      SetView(Product);
    }
  }, [value]);

  return (
    <div className="h-[876px] overflow-auto grow  px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
      {View.length > 0 ? (
        View?.filter(
          (el) =>
            el.name?.toLowerCase().includes(Searsh?.toLowerCase()) ||
            el.price?.toString().toLowerCase().includes(Searsh?.toLowerCase()),
        )?.map((el) => <Carde key={el.id} el={el} />)
      ) : (
        <h1 className=" text-2xl font-bold">No Product Found</h1>
      )}
    </div>
  );
}
