import socketIOClient from "socket.io-client";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";
const ChatContainer = () => {
    let socketio = socketIOClient('http://localhost:3000');
    const [chats, setChats] = useState([]);
    const [user, setUser] = useState(localStorage.getItem('name'))
    const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))

    const navigate = useNavigate()

    useEffect(() => {
        socketio.on('chat', (msg) => {
            setChats([...chats, msg])
        })
    })
    function sendChatToSocket(chat) {
        socketio.emit('chat', chat)
    }

    function addMessage(chat) {
        const newChat = { ...chat, user, avatar }
        setChats([...chats, newChat])
        sendChatToSocket(newChat)
    }

    function logout() {
        localStorage.removeItem('name')
        localStorage.removeItem('avatar')
        setUser('')
        navigate('/')
    }
    function ChatsLists() {
        return chats.map((chat, index) => {
            if (chat.user === user) {
                return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} />
            } else {
                return <ChatBoxReciever key={index} message={chat.message} avatar={chat.avatar} />
            }
        })
    }
    return (
        <div className='flex flex-col h-screen'>
            <div className='flex-1 overflow-y-auto'>
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }} >
                    <h4>Username: {user}</h4>
                    <p onClick={() => logout()} style={{ color: "blue", cursor: 'pointer' }} >Log Out</p>
                </div>
                <ChatsLists />

                <InputText className='fixed bottom-0 left-0 right-0' addMessage={addMessage} /> {/* Apply fixed positioning */}
            </div>
        </div>
    )
}

export default ChatContainer