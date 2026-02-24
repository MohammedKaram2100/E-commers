import {Domin, useCard} from '../Stor/zuztant';
import noimg from '../assets/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

export default function Cardebage() {
  const {value: Card, deleat, Iculal, Plass} = useCard();

  return (
    <>
      <div className="w-full flex justify-center overflow-auto">
        <div className=" container h-[876px]  flex items-start p-6 gap-3 flex-wrap justify-center ">
          {Card.map((el, index) => (
            <div
              key={index}
              className=" flex flex-col gap-3 px-4 py-6 bg-[#b5b5b53f] rounded-2xl w-[266.3333435058594px] "
            >
              <img
                src={el.img ? Domin + el?.img?.url : noimg}
                className=" object-cover h-[160px] rounded"
              />
              <p>{el.name}</p>
              <h1 className=" font-bold">{+el.price * +el.qty} $</h1>
              <div className=" flex justify-around">
                <button
                  onClick={() => Iculal(index)}
                  className=" btn btn-soft btn-error"
                >
                  -
                </button>
                <p className=" font-bold"> {el.qty}</p>

                <button
                  onClick={() => Plass(index)}
                  className=" btn btn-soft btn-primary"
                >
                  +
                </button>
              </div>
              <button
                className=" btn btn-soft btn-error w-[50%]"
                onClick={deleat}
              >
                Deleat
              </button>
              <button className=" btn btn-block">buy Prducte</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
