import React from 'react';
import ChatBoxReciever, { ChatBoxSender } from './ChatBox';
import InputText from './InputText';

const ChatHome = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className='flex-1 overflow-y-auto'>
                <ChatBoxReciever avatar="https://i.pravatar.cc/150?u=a04258a2462d826712d" user="Dhruv" message="Hello" />
                <ChatBoxSender avatar="https://i.pravatar.cc/150?u=a04258h2462d829712d" user="Dhruv" message="Hello I'm Dhruv, doing this assignment" />
                <ChatBoxReciever avatar="https://i.pravatar.cc/150?u=a04258a2462d826712d" user="Kotwani" message="Hello" />
                <ChatBoxSender avatar="https://i.pravatar.cc/150?u=a04258h2432d826712d" user="Unkonw" message="Hello I'm Dhruv, doing this assignment" />
            </div>
            <InputText className='fixed bottom-0 left-0 right-0' addMessage={(message) => message.message} /> {/* Apply fixed positioning */}
        </div>
    );
}

export default ChatHome;
