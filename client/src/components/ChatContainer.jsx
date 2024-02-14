import socketIOClient from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";
import { Avatar, Badge, Button } from "@nextui-org/react";
import { LogoutIcon } from "../utils/Icons";
const ChatContainer = () => {
    // let socketio = socketIOClient('http://localhost:3000');
    const [chats, setChats] = useState([
        { user: 'Kotwani', message: 'This assignment is done by Dhruv', avatar: '/images/4.png' },
        { user: 'Dhruv', message: 'These are hardcoded text', avatar: '/images/5.svg' },
        { user: 'Bhawna', message: 'How are you?', avatar: '/images/1.png' },
    ]);
    const [user, setUser] = useState(localStorage.getItem('name'))
    const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))

    const navigate = useNavigate()

    // useEffect(() => {
    //     socketio.on('chat', (msg) => {
    //         setChats([...chats, msg])
    //     })
    // })

    function sendChatToSocket(chat) {
        // socketio.emit('chat', chat)
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
    const chatListRef = useRef(null);

    // Scroll to the bottom of the chat list when it updates
    useEffect(() => {
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [chats]);

    return (
        <>
            <div className="flex flex-row justify-between p-2  ">
                <div className=" flex gap-2 items-center">
                    <Badge content="" color="success" shape="circle" placement="bottom-right">
                        <Avatar
                            radius="full"
                            src='/images/1.png'
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

            <div className="flex-grow overflow-y-auto  h-[calc(77vh-3rem)]  hide-scrollbar  " ref={chatListRef}>
                <ChatsLists />
            </div>

            <div className="fixed bottom-0 left-0 right-0 sm:w-4/6 sm:mx-auto z-10">
                <InputText addMessage={addMessage} />
            </div>
        </>
    )
}

export default ChatContainer