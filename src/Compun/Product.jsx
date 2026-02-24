import ProductCatgre from './ProductCatgre';
import ProViwe from './ProViwe';

export default function Product() {
  return (
    <div className="w-full  gap-6 flex justify-center ">
      <div className=" container h-[876px]  flex items-start">
        <ProductCatgre />
        <ProViwe />
      </div>
    </div>
  );
}
