import React from 'react';
import Scroll from 'react-scroll-to-bottom';
import Message from './Message';
import '../custom.css'
const Messages = ({ messages, name }) => {
  return (
    <Scroll className="h-[500px] w-full p-4 bg-gray-100 shadow-lg overflow-y-auto no-scrollbar">
      {messages.map((msg, i) => (
        <div key={i} className='mb-2'>
          <Message message={msg} name={name} />
        </div>
      ))}
    </Scroll>
  );
};

export default Messages;
