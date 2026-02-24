import React from 'react';
import {Carde, Domin} from '../store/Index';
import noimg from '../assets/noimg.jpg';
import {FaTrash} from 'react-icons/fa';

export default function PageCarde() {
  const {countent, PlassQty, MinusQty, Remove} = Carde();
  return (
    <div className="overflow-x-auto w-full h-[100vh ] p-4 ">
      <table className="table h-full text-center">
        {/* head */}
        <thead className="font-semibold text-[18px] text-gray-950 text-center ">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className=" h-[50vh]  ">
          {/* row 1 */}
          {countent?.map((item, index) => (
            <tr key={index} className=" text-[20px] font-semibold text-center">
              <td>{index + 1}</td>
              <td>
                <img
                  src={
                    item?.img
                      ? Domin + item?.img.formats?.thumbnail?.url
                      : noimg
                  }
                  alt="product image"
                  className=" object-cover rounded-md  h-full"
                />
              </td>
              <td>{item.name}</td>
              <td>{+item.price * +item.qty}$</td>
              <td>
                {' '}
                <button className="btn btn-sm" onClick={() => PlassQty(index)}>
                  +
                </button>
                <span className="mx-2">{item.qty}</span>
                <button className="btn btn-sm" onClick={() => MinusQty(index)}>
                  -
                </button>
              </td>
              <td>
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => Remove(index)}
                />
              </td>
            </tr>
          ))}
          {/* row 2 */}
        </tbody>
        <tfoot className="font-semibold text-[18px] text-gray-950 ">
          <tr>
            <th></th>
            <th>Total</th>
            <th></th>
            <th></th>
            <th>
              {countent.reduce((total, el) => total + el.price * el.qty, 0)}$
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
