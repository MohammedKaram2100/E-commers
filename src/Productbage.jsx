import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Domin} from './Stor/zuztant';
import noimg from './assets/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

export default function Productbage() {
  const navegat = useNavigate();
  const [Product, SetProduct] = useState([]);
  let prams = useParams();
  let enpuint = '/api/products/' + prams?.ProductId + '?populate=*';
  let url = Domin + enpuint;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        SetProduct(res.data.data);
        let file = res.data.data;
        let color = file.allColors;
        let Files = color?.split(' /n ');
      })
      .catch((err) => {
        console.log(err);
        navegat('*');
      });
  }, []);

  return (
    <div className=" w-full h-[50vh ] p-4 ">
      <table className=" table ">
        <thead>
          <tr className="text-black">
            <th>Product name</th>
            <th>Product img</th>
            <th>Product price</th>
            <th>Avlabul colors</th>
            <th>data name</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-[16px] font-semibold">
            <td>{Product.name}</td>
            <td>
              <img
                className=" w-[150px] object-cover rounded-2xl "
                src={Product.img ? Domin + Product?.img?.url : noimg}
              />
            </td>
            <td>{Product.price} $</td>
            <td>
              {Product.allColors ? (
                Product.allColors
              ) : (
                <h1>Not Avlabul colors</h1>
              )}
            </td>
            <td>
              <ul>
                <li>bttry: 300ms</li>
                <li> chinge:200</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
