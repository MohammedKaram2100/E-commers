import {Carde, Domin} from '../store/Index';
import noimg from '../assets/noimg.jpg';
import toast from 'react-hot-toast';

export default function Card({product}) {
  const {AddCarde, countent} = Carde();
  const include = countent.find(
    (item) => item.documentId === product?.documentId,
  );
  return (
    <div className="card bg-gray-400 shadow-sm h-[350px] p-2 rounded-lg">
      <figure>
        <img
          src={product?.img ? Domin + product?.img.url : noimg}
          alt="Shoes"
          className=" object-cover  w-full "
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{product?.name}</h2>
        <p> Price: {product?.price} $</p>
        <Link to={`product/${product?.documentId}`}> Show Detelise</Link>
        <div className="card-actions justify-center">
          <button
            onClick={() => {
              AddCarde(product);
              toast.success('Product added to cart');
            }}
            disabled={include}
            className="btn btn-neutral w-[90%] "
          >
            {include ? 'Added' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
