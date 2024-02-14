import socketIOClient from "socket.io-client";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";
import { Avatar, Badge, Button } from "@nextui-org/react";
import { LogoutIcon } from "../utils/Icons";
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
            <div className=' flex-1 overflow-y-auto '>
                <div className="flex flex-row justify-between p-2 border-b bg-[#F6FAFE]">
                    <div className="flex gap-2 items-center">
                        <Badge content="" color="success" shape="circle" placement="bottom-right">
                            <Avatar
                                radius="full"
                                src={avatar}
                            />
                        </Badge>
                        <div className="">
                            <p className="text-base font-bold">{user}</p>
                            <p className="text-xs text-gray-500">I 💖 Coding</p>
                        </div>
                    </div>

                    <Button onClick={() => logout()} className="flex items-center justify-center" radius="sm" variant="flat"  >
                        <LogoutIcon className="mr-2" />
                        Logout
                    </Button>
                </div>
                <ChatsLists />

                <InputText className='fixed bottom-0 left-0 right-0' addMessage={addMessage} /> {/* Apply fixed positioning */}
            </div>
        </div>
    )
}

export default ChatContainer