import {useEffect, useState} from 'react';
import Card from '../ui/Carte';
import usHome from '../hook/usHome';
import {Store} from '../store/Index';

export default function Products() {
  const [products, setProducts] = useState([]);
  const {selectcat} = Store();

  const {Sersh} = Store();
  const {Products} = usHome();
  useEffect(() => {
    Products().then(setProducts).catch(console.error);
  }, [selectcat]);

  return (
    <div className=" grow h-full overflow-auto flex justify-center p-7">
      <div className=" container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products
          ?.filter?.((product) =>
            product?.name?.toLowerCase().includes(Sersh?.toLowerCase()),
          )
          ?.map((product) => (
            <Card key={product.documentId} product={product} />
          ))}
      </div>
    </div>
  );
}
