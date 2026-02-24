import logo from './assets/Logo.svg';
import {CiHeart, CiUser} from 'react-icons/ci';
import {BsCart3} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {IoMenuSharp} from 'react-icons/io5';
import {Catuger, useCard} from './Stor/zuztant';

export default function Header() {
  const {value: Product} = useCard();
  const {SetSearsh} = Catuger();

  return (
    <header className=" border-b border-b-[#B5B5B5] p-4 flex justify-center">
      <div className=" container flex items-center justify-between ">
        <img src={logo} />
        <input
          type="search"
          onChange={(e) => SetSearsh(e.target.value)}
          placeholder="Search"
          className=" input bg-[#F5F5F5] hidden md:block "
        />
        <nav className=" md:flex gap-[53px] hidden">
          <Link
            to={'/'}
            className=" text-black font-medium text-[16px] font-serif"
          >
            {' '}
            Home
          </Link>
          <Link className="  text-black/30 font-medium text-[16px]">
            {' '}
            abouty
          </Link>
          <Link className="  text-black/30 font-medium text-[16px]">
            {' '}
            comtant
          </Link>
          <Link
            to={'/Login'}
            className="  text-black/30 font-medium text-[16px]"
          >
            {' '}
            Login
          </Link>
        </nav>
        <div className=" md:flex items-center gap-[27px] hidden">
          <CiUser className=" text-[32px]" />
          <Link to={'/CardBage'}>
            <BsCart3 className=" text-[32px] relative" />
            {Product.length > 0 && (
              <span className="text-black p-3 absolute top-[-6px] font-bold right-[117px]">
                {Product.length}
              </span>
            )}
          </Link>
          <CiHeart className=" text-[32px]" />
        </div>
        <IoMenuSharp className=" block md:hidden" />
      </div>
    </header>
  );
}
