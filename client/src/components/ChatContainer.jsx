import socketIOClient from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";
import { Avatar, Badge, Button } from "@nextui-org/react";
import { LogoutIcon, UsersIcon } from "../utils/Icons";
const ChatContainer = () => {
    let socketio = socketIOClient('http://localhost:3000');
    const [chats, setChats] = useState([
        { user: 'Test[Bot]', message: 'This assignment is done by Dhruv', avatar: '/images/4.png' },
        { user: 'Dhruv[Bot]', message: 'These are hardcoded text', avatar: '/images/5.svg' },
        { user: 'Bhawna', message: 'How are you?', avatar: '/images/1.png' },
    ]);
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
    const chatListRef = useRef(null);

    // Scroll to the bottom of the chat list when it updates
    useEffect(() => {
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [chats]);

    return (
        <div className="flex items-start  justify-center bg-[#fef9fa]  border-t ">
            <TotalUsers chats={chats} />
            <div className="sm:w-3/4 sm:border-l-1 sm:px-2">
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
            </div>

        </div>
    )
}
export default ChatContainer

const TotalUsers = ({ chats }) => {

    const uniqueUsersMap = {};

    const uniqueUsers = chats.reduce((acc, chat) => {
        if (!acc.some(user => user.user === chat.user)) {
            acc.push(chat);
        }
        return acc;
    }, []);

    uniqueUsers.push({
        user: localStorage.getItem('name'),
        avatar: localStorage.getItem('avatar')
    });

    uniqueUsers.forEach(user => {
        if (!uniqueUsersMap[user.user]) {
            uniqueUsersMap[user.user] = user;
        }
    });

    const onlyUsers = Object.values(uniqueUsersMap).map(user => ({
        name: user.user,
        avatar: user.avatar
    }));

    console.log(onlyUsers)
    return (
        <div className="w-1/4 hidden sm:block ">
            <h1 className="text-2xl font-bold flex items-center justify-center gap-2 border-b-1 py-2">
                <UsersIcon />
                Users
            </h1>
            <ul className="mx-auto">
                {
                    onlyUsers.map((user, index) => {

                        return (
                            <li key={index} className="flex items-center justify-start gap-2 p-2 border-b-1">
                                <Avatar
                                    radius="full"
                                    src={user.avatar}
                                />
                                <p className="text-base font-medium">{user.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

