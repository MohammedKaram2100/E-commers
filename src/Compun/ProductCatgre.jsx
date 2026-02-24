import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Catuger, Domin} from '../Stor/zuztant';

export default function ProductCatgre() {
  const [Categorie, SetCategorie] = useState([]);
  const {selectCat, SetSearsh} = Catuger();
  useEffect(() => {
    let url = Domin + '/api/categories';
    axios
      .get(url)
      .then((res) => {
        SetCategorie(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" w-[256px] h-[472px]">
      <div className="collapse collapse-arrow  ">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-2x1 font-semibold border-b border-b-[#B5B5B5]">
          Categories
        </div>
        <div className="collapse-content py-4  ">
          <input
            type="search"
            onChange={(e) => SetSearsh(e.target.value)}
            placeholder="Search"
            className=" input bg-[#F5F5F5] hidden md:block "
          />
          {Categorie?.map((el, index) => (
            <div key={index} className="w-full flex gap-3 p-1">
              <label className=" flex gap-3">
                <input
                  onClick={() => {
                    selectCat(el);
                  }}
                  name="cat"
                  type="radio"
                  className="checkbox checkbox-neutral"
                />
                {el.name}
              </label>
            </div>
          ))}
          <button
            onClick={() => {
              selectCat(null);
            }}
            className=" btn btn-neutral w-full mt-1"
          >
            Abbly
          </button>
        </div>
      </div>
    </div>
  );
}
