import React from 'react'
import ChatBoxReciever, { ChatBoxSender } from './ChatBox'

const ChatHome = () => {
    return (
        <div>
            <ChatBoxReciever avatar="https://i.pravatar.cc/150?u=a04258a2462d826712d" user="Dhruv" message="Hello" />
            <ChatBoxSender avatar="https://i.pravatar.cc/150?u=a04258h2462d829712d" user="Dhruv" message="Hello I'm Dhruv, doing this assignment" />
            <ChatBoxReciever avatar="https://i.pravatar.cc/150?u=a04258a2462d826712d" user="Kotwani" message="Hello" />
            <ChatBoxSender avatar="https://i.pravatar.cc/150?u=a04258h2432d826712d" user="Unkonw" message="Hello I'm Dhruv, doing this assignment" />
        </div>
    )
}

export default ChatHome