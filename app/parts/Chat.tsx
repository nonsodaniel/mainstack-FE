import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import Button from "./Button";
import { useStateContext } from "../context/contextProvider";

const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item fixed right-1 top-20  bg-white  p-4  w-40 z-50   rounded-xl  sidebar shadow-2xl">
      <div className="flex justify-between items-center">
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      Chat
    </div>
  );
};

export default Chat;
