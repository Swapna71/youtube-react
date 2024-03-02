import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

import CommentsContainer from "./CommentsContainer";
import Subscribe from "./Subscribe";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex flex-col">
      <div className="px-5 flex ">
        <div>
          <iframe
            className="rounded-lg w-[65vw] h-[70vh]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <LiveChat />
        </div>
      </div>

      <Subscribe />
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
