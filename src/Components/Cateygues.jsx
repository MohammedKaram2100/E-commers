import {useEffect, useState} from 'react';
import usHome from '../hook/usHome';
import {Store} from '../store/Index';

export default function Cateygues() {
  const {Cateygues} = usHome();
  const {SetSearsh, Setselectcat, selectcat} = Store();
  const [Categuyes, setCateygues] = useState([]);
  useEffect(() => {
    Cateygues().then(setCateygues).catch(console.error);
  }, []);
  const Handelselact = (name) => {
    if (selectcat.includes(name)) {
      Setselectcat(selectcat.filter((item) => item !== name));
    } else {
      Setselectcat([...selectcat, name]);
    }
  };

  return (
    <div className="  mt-10 w-[20%] border-e-2 border-gray-200 pe-3 ">
      <div className="collapse collapse-arrow w-full ">
        <input type="checkbox" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold border-b-2 border-gray-200 text-[17px]">
          Categories{' '}
        </div>
        <div className="collapse-content text-sm">
          {Categuyes?.map((cateygue) => (
            <label
              key={cateygue?.documentId}
              className="flex items-center gap-2 my-3 cursor-pointer"
            >
              <input
                type="checkbox"
                onChange={() => {
                  Handelselact(cateygue?.name);
                }}
                className="checkbox checkbox-neutral"
              />
              <p className=" font-sans font-semibold text-[17px]">
                {cateygue?.name}
              </p>
            </label>
          ))}
        </div>
      </div>
      <label className="input bg-gray-200">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search"
          onChange={(e) => SetSearsh(e.target.value)}
        />
      </label>
      <button className="btn btn-block hover:bg-gray-800 w-full mt-4 font-sans">
        View All
      </button>
    </div>
  );
}
