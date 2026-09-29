import React from "react";

const Loading = ({ message }) => {
    return (
<div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">

  <div className="bg-[#111b21] px-8 py-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 border border-[#2a3942]">

    {/* Spinner */}
    <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

    {/* Message */}
    <p className="text-gray-400 text-sm font-medium text-center">
      {message ? message : "Please wait... connecting to ChatWallah"}
    </p>

  </div>
</div>


    );
};

export default Loading;