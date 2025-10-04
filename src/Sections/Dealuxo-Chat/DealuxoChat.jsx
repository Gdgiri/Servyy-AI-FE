import React, { useState } from "react";
import {
  FiRepeat,
  FiFilePlus,
  FiLogOut,
  FiSettings,
  FiChevronDown,
  FiSend,
} from "react-icons/fi";
import { ImAttachment } from "react-icons/im";
import { RiHistoryLine } from "react-icons/ri";
import image from "../../assets/Sales-Manager/section3.png";
import axios from "axios";
import { marked } from "marked";

const DealuxoChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input }; // use "content"
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const storedUserId = localStorage.getItem("user_id");

      const requestBody = { message: input };
      if (storedUserId) requestBody.user_id = storedUserId;

      const res = await axios.post(
        "http://192.168.1.12:5000/chat",
        requestBody
      );

      if (res.data.user_id) {
        localStorage.setItem("user_id", res.data.user_id);
      }

      const systemResponse = {
        role: "system",
        content: res.data.response, // also "content"
      };

      setMessages((prev) => [...prev, systemResponse]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "system", content: "⚠️ Server error, try again later." },
      ]);
    }
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div
        className="w-72 relative flex flex-col justify-between p-4 text-white shadow-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Top Header Section */}
        <div className="relative z-10 space-y-4">
          {/* Title Bar */}
          <div className="flex justify-between items-center gap-2 -mx-2 py-2 rounded">
            {/* Left section with text and FiRepeat */}
            <div className="bg-white flex items-center p-2 rounded-l">
              <h2 className="text-lg font-bold flex items-center space-x-1">
                <span className="text-red-600">Dealuxo’s</span>
                <span className="text-black">playground</span>
                <FiRepeat className="text-xl cursor-pointer text-red-500" />
              </h2>
            </div>

            {/* Right section with FiFilePlus */}
            <div className="bg-white p-3 rounded-r flex items-center">
              <FiFilePlus className="text-xl cursor-pointer text-red-500" />
            </div>
          </div>

          {/* New Chat Icon Button */}
          <div className="flex justify-end">
            <button className="bg-red-500 p-2 rounded text-white hover:bg-red-600 flex items-center space-x-2">
              <span>New file</span>
              <FiFilePlus className="text-lg" />
            </button>
          </div>

          {/* History */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-white">History</h3>
            <div className="space-y-2">
              {[
                "Negotiation strategies",
                "Sales ideas",
                "Sales ideas",
                "Sales ideas",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between text-sm px-4 py-2 rounded cursor-pointer ${
                    index === 0
                      ? "bg-red-200 text-red-700"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <span>{item}</span>
                  <FiChevronDown className="text-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="relative z-10 flex justify-between items-center gap-2 -mx-2 py-2 rounded">
          {/* Left section with text and FiRepeat */}
          <div className="bg-white flex items-center p-2 px-20 rounded-lg">
            <h2 className="text-lg font-bold flex items-center space-x-1">
              <button className="flex items-center font-semibold text-black">
                Logout
              </button>
            </h2>
          </div>

          {/* Right section with FiFilePlus */}
          <div className="bg-white p-3 rounded-lg flex items-center">
            <FiSettings className="text-xl cursor-pointer text-red-500" />
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div
        className="relative flex-1 bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50" />
        {/* Dropdown */}
        <div className="absolute top-4 right-4 z-10">
          <button className="bg-red-500 flex items-center text-white px-4 py-2 rounded">
            Negotiation advisor <FiChevronDown className="ml-2" />
          </button>
        </div>
        {/* Chat Messages */}
        <div className="absolute top-24 bottom-28 left-0 right-0 overflow-y-auto px-4 z-10">
          <div className="max-w-4xl mx-auto space-y-4 flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-3 text-sm shadow-md break-words ${
                    msg.role === "user"
                      ? "bg-white text-gray-800 border-l-4 border-red-500 text-right"
                      : "bg-red-100 text-gray-900 border-l-4 border-red-500 text-left"
                  }`}
                  style={{ maxWidth: "85%", width: "fit-content" }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(msg.content || ""),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10 px-4">
          <div className="bg-white rounded-full shadow-lg px-4 py-2 w-full gap-4 max-w-2xl flex items-center">
            <button className="text-gray-800">
              <ImAttachment />
            </button>
            <input
              type="text"
              className="flex-1 outline-none text-gray-800 placeholder:text-sm"
              placeholder="Can I help you buddy..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full ml-2"
            >
              <FiSend className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealuxoChat;
