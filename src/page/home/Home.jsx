import Cateygues from '../../Components/Cateygues';
import Products from '../../Components/Products';

export default function Home() {
  return (
    <div>
      <div className=" flex justify-center ">
        <div className="container flex justify-center h-screen gap-4">
          <Cateygues />
          <Products />
        </div>
      </div>
    </div>
  );
}
