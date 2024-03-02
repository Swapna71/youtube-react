import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.chat.message);
  useEffect(() => {
    const timer = setInterval(
      () =>
        dispatch(
          addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20),
          })
        ),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="border border-gray-200 shadow-xl ml-10  rounded-lg w-[26vw]  ">
        <h1 className="font-bold text-lg mt-4  mx-4 shadow-lg">Live Chat</h1>

        <div className="flex flex-col-reverse overflow-y-scroll w-[26vw]  h-[67vh] border border-gray-100  rounded-lg">
          {selector.map((chat, i) => (
            <ChatMessage key={i} name={chat.name} comment={chat.message} />
          ))}
        </div>

        <form
          className=" rounded-md  flex p-4"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "user", message: liveMessage }));
          }}
        >
          <input
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="w-60 bg-gray-100 outline-none border-b-2 border-slate-300"
            type="text"
          />
          <button className="px-4 mx-4 rounded-lg bg-cyan-100">sent</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
