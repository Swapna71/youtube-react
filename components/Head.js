import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between the two key press is less than 200ms
    // then declined that api call
    // console.log(searchQuery)

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        return setShowSuggestions(searchCache[searchQuery]);
      } else {
        getYoutubeSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getYoutubeSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const handleOnToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-6 m-2 shadow-lg sticky top-0 z-50 bg-white">
      <div className="flex col-span-4">
        <img
          onClick={() => handleOnToggle()}
          className="h-8 cursor-pointer "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz8qMxRmaHif6zYN0OyOJ2zi8gBulBwLPnw&usqp=CAU"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-20 absolute top-[1px]  left-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ14LVGaN_KSdlSAgALQT18-oYukGg7su66A&usqp=CAU"
            alt="logo"
          />
        </a>
      </div>
      <div className="">
        <div className=" w-[40vw] flex col-span-4 text-center border-[3px] rounded-full text-lg bg-slate-100 -mt-2">
          <input
            className="w-11/12 h-full hover:border-[2px] border-r-[3px]  hover:border-blue-500 hover:shadow-lg bg outline-none rounded-l-full text-lg font-semibold pl-8 p-[6px] "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <img
            className="h-6 p-[4px] ml-4 mt-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskRCmHkr2bpX5sZbiCO8KCIFAhdEDrs5ieQ&usqp=CAU"
            alt="search-icon"
          />
        </div>

        {showSuggestions && (
          <div className="fixed bg-white text-lg font-semibold border border-gray-200 rounded mx-2 w-[36vw]">
            <ul className="p-2">
              {suggestions.map((s) => (
                <div className="flex items-center"  key={s}>
                  <img
                    className="w-4 h-4 m-3 object-cover hover:bg-gray-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskRCmHkr2bpX5sZbiCO8KCIFAhdEDrs5ieQ&usqp=CAU"
                    alt="search-icon"
                  />
                  <li className="m-[2px]  ">{s}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-4 ">
        <img
          className="h-10 absolute right-20 top-4 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
