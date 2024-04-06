import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import NavList from "./NavList";
import axios from "axios";
import { loginUser, setUser } from "../redux/slices/AuthSlice";
import { getCart } from "../helper";
import { setCart } from "../redux/slices/CartSlice";
import Logo from "../assets/logo.jpeg";

axios.defaults.withCredentials = true;

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false);

  const auth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  const getUser = async () => {
    const res = await axios.get("https://food-delivery-b2-world-6dxakx4tl-anukritis-projects.vercel.app/api/get-user", {
      withCredentials: true,
    });
    const data = await res.data;
    dispatch(setUser(data.user));
    dispatch(loginUser());
  };

  getCart(user).then((data) => dispatch(setCart(data.cartItems)));

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">

      <div style={{ display: "flex" }}>
        <img src={Logo} alt="logo" style={{ marginRight: "150px" }} />
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
      <GiHamburgerMenu
        className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-2xl text-gray-600 cursor-pointer ${toggleNav && "hidden"
          } transition-all ease-in-out duration-500`}
        onClick={() => setToggleNav(true)}
      />
      <MdClose
        className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-2xl text-gray-600 cursor-pointer ${!toggleNav && "hidden"
          } transition-all ease-in-out duration-500`}
        onClick={() => setToggleNav(false)}
      />
      <NavList toggleNav={toggleNav} setToggleNav={setToggleNav} auth={auth} />
    </nav>
  );
};

export default Navbar;
