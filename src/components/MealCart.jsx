import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./MealCart.css";

const MealCart = ({ name, image, id }) => {
  return (
    <div className="relative parent">
      <img
        className="h-[300px] object-cover rounded-lg image"
        src={image}
        alt=""
      />
      <Link to={`/detail/${id}`}>
      <p className="icon flex bg-black align-middle items-center justify-center h-12 w-12 rounded-full absolute top-[42%] left-[42%]">
        <BiSearch className="text-3xl text-orange-100" />
      </p>
      </Link>
    </div>
  );
};

export default MealCart;
