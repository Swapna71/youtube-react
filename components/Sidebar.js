import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  if (!isMenuOpen) return null;

  return (
    <div className="p-2 shadow-lg w-44 cursor-pointer ">
      <ul className="my-5  text-center">
      <Link to="/"> <li className="p-2 font-bold hover:bg-gray-100 rounded-lg">Home</li></Link>
        <li className="p-2 font-bold hover:bg-gray-100 rounded-lg">Shorts</li>
        <li className="p-2 font-bold hover:bg-gray-100 rounded-lg">SubsCription</li>
      </ul>
      <hr />
      <h3 className="p-2 font-bold hover:bg-gray-100 rounded-lg text-center">Subscription</h3>
      <ul className="text-center">
        <li  className="p-2 font-base hover:bg-gray-100 rounded-lg">Music</li>
        <li  className="p-2 font-base hover:bg-gray-100 rounded-lg">Sports</li>
        <li  className="p-2 font-base hover:bg-gray-100 rounded-lg">Gaming</li>
        <li  className="p-2 font-base hover:bg-gray-100 rounded-lg">News</li>
      </ul>
      <hr />
      <h3 className="p-2 font-bold hover:bg-gray-100 rounded-lg text-center">Explore</h3>
      <ul className="text-center">
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Trending</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Shopping</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Music</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Films</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Live</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Gaming</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">News</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Sport</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Learning</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Fashion & Beauty</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Podcasts</li>
      </ul>
      <hr />
      <h3 className="text-center font-bold hover:bg-gray-100 rounded-lg ">More From YouTube</h3>
      <ul className="text-center" >
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg"> YouTube Premium</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">YouTube Studio</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">YouTube Music</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">YouTube Kids</li>
      </ul>
<hr />
      <ul className="my-5 text-center">
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Setting</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Report history</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Help</li>
        <li className="p-2 font-base hover:bg-gray-100 rounded-lg">Send feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
