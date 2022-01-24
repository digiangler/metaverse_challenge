import React, { useState } from "react";
import { useMoralis } from "react-moralis";
interface Props {
  endOfMessagesRef: any;
}
function SendMessage({ endOfMessagesRef }: Props) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
      })
      .then(
        (message: any) => {},
        (error: any) => {}
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="fixed flex w-11/12 max-w-2xl px-6 py-4 bg-black border-4 border-blue-400 rounded-full shadow-xl bottom-10 opacity-80">
      <input
        type="text"
        className="flex-grow pr-5 text-white placeholder-gray-500 bg-transparent outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user?.getUsername()}...`}
      ></input>
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
