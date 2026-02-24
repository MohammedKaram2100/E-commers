import {Domin} from '../../store/Index';
import noimg from '../../assets/noimg.jpg';
import usproductid from '../../hook/usproductid';

export default function ProductId() {
  const {product} = usproductid();
  return (
    <div className="overflow-x-auto w-full h-[100vh ] p-4 ">
      <table className="table h-full">
        {/* head */}
        <thead className="font-semibold text-[18px] text-gray-950 ">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Favorite Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className=" h-[50vh] ">
          {/* row 1 */}
          <tr className="text-[16px] font-bold">
            <th>#</th>
            <td>
              <img
                src={
                  product?.img
                    ? Domin + product?.img.formats?.thumbnail?.url
                    : noimg
                }
                alt="product image"
                className=" object-cover rounded-md  h-full"
              />
            </td>
            <td>{product?.name}</td>
            <td>
              {product?.allColors ? (
                product?.allColors
              ) : (
                <h1>Not Avlabul colors</h1>
              )}
            </td>
            <td>{product?.price} $</td>
          </tr>
          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
}
