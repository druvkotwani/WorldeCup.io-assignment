import React from 'react';
import ChatContainer from './ChatContainer';

const ChatHome = () => {
    return (
        <div className='h-full w-full sm:w-4/6 mx-auto border-x-1 boder-y-1    m-4 '>
            <div className='h-16 bg-[#F6FAFE] flex items-center justify-center'>
                <h1 className='text-2xl font-bold'>Chat App</h1>
            </div>

            <ChatContainer />
        </div>
    );
}

export default ChatHome;
