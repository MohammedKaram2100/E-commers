import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Domin} from '../store/Index';

export default function usproductid() {
  const [product, setProduct] = useState(null);
  const {ProductId} = useParams();
  let Endpoint = '/api/products/' + ProductId;
  useEffect(() => {
    axios
      .get(Domin + Endpoint, {params: {populate: 'img'}})
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [ProductId]);
  return {product};
}
