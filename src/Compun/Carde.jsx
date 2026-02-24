import toast from 'react-hot-toast';
import {Domin, useCard} from '../Stor/zuztant';
import {Link} from 'react-router-dom';
import noimg from '../assets/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

export default function Carde({el}) {
  const {AddCard, value} = useCard();
  const isInCart = value.find((item) => item.documentId === el.documentId);
  return (
    <div className=" flex flex-col h-[370px] gap-3 px-4 py-6 bg-gray-400 text-[#000000ce] rounded-2xl w-[266.3333435058594px] ">
      <img
        src={el.img ? Domin + el.img.url : noimg}
        className=" object-cover h-[160px]"
      />
      <p>{el.name}</p>
      <h1>{el.price}</h1>
      <Link className=" cursor-pointer" to={`Productbage/${el.documentId}`}>
        {' '}
        Show Carte
      </Link>
      <button
        onClick={() => {
          AddCard({...el, Qart: 1});
          toast.success('Successfully Add Carde');
        }}
        disabled={isInCart}
        className="btn btn-block"
      >
        {isInCart ? 'Added' : 'Add to cart'}
      </button>
    </div>
  );
}
