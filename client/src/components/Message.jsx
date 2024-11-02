import React from 'react';

const Message = ({ message, name }) => {
  const trimmedName = name.trim().toLowerCase();
  const isSender = message.user === trimmedName;

  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} p-2`}>
      <div className={`flex flex-col ${isSender ? 'items-end' : 'items-start'} max-w-xs`}>
        {isSender ? (
          <p className="text-sm text-gray-500 mb-1">{trimmedName}</p>
        ) : (
          <p className="text-sm text-gray-500 mb-1">{message.user}</p>
        )}
        <div
          className={`p-3 rounded-lg ${
            isSender ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
          }`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
