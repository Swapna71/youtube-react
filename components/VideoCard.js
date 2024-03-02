import React from "react";


const VideoCard = ({ info }) => {
  // console.log(info)
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" w-72 w- mx-10 my-6 shadow-md rounded-md">
      <img
        className="w-screen rounded"
        src={thumbnails.medium.url}
        alt="video"
      />
      <div className="flex">
        <img
          className="w-10 mt-1 mx-2 h-10 object-cover  rounded-full"
          src={thumbnails.medium.url}
          alt="channelimg"
        />
        <ul className="">
          <li className="text-sm font-bold">{title}</li>
          <li className="text-xsm text-slate-400 font-semibold">
            {channelTitle}
          </li>
          <li className="text-xsm font-semibold text-slate-400">
            {statistics.viewCount} views
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
