import socketIOClient from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";
import { Avatar, Badge, Tooltip } from "@nextui-org/react";
import { UsersIcon } from "../utils/Icons";
const ChatContainer = () => {
    // let socketio = socketIOClient('https://backedn-zm4f.onrender.com');
    const [chats, setChats] = useState([
        { user: 'Bot-1', message: 'This assignment is done by Dhruv', avatar: '/images/4.png', status: 'warning' },
        { user: 'Bot-2', message: 'These are hardcoded text', avatar: '/images/5.svg', status: 'default' },
        { user: 'SuperBot', message: 'How are you?', avatar: '/images/1.png', status: 'primary' },
    ]);
    const [user, setUser] = useState(localStorage.getItem('name'))
    const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))

    // useEffect(() => {
    //     socketio.on('chat', (msg) => {
    //         setChats([...chats, msg])
    //     })
    // })



    function sendChatToSocket(chat) {
        // socketio.emit('chat', chat)
    }

    function addMessage(chat) {
        const newChat = { ...chat, user, avatar, status: 'success' }
        setChats([...chats, newChat])
        sendChatToSocket(newChat)
    }


    function ChatsLists() {
        return chats.map((chat, index) => {
            if (chat.user === user) {
                return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} color={chat.status} user={chat.user} />
            } else {
                return <ChatBoxReciever key={index} message={chat.message} avatar={chat.avatar} color={chat.status} user={chat.user} />
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
            <div className="sm:w-3/4 w-full sm:border-l-1 ">
                <div className="flex flex-row justify-between p-2  ">
                    <div className=" flex gap-2 items-center">
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
                </div>

                <div className="flex-grow overflow-y-auto border-t border-b h-[calc(100vh-13rem)]   hide-scrollbar  " ref={chatListRef}>
                    <ChatsLists />
                </div>
                <div className="z-10 flex items-center justify-center mt-auto ">
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
        avatar: localStorage.getItem('avatar'),
        status: 'success'
    });

    uniqueUsers.forEach(user => {
        if (!uniqueUsersMap[user.user]) {
            uniqueUsersMap[user.user] = user;
        }
    });

    const onlyUsers = Object.values(uniqueUsersMap).map(user => ({
        name: user.user,
        avatar: user.avatar,
        status: user.status
    }));


    console.log(onlyUsers)
    return (
        <>
            <div className="w-1/4 hidden sm:block flex justify-center items-center">
                <div>
                    <h1 className="text-2xl font-bold flex items-center justify-center gap-2 border-b-1 py-3">
                        <UsersIcon />
                        Users
                    </h1>

                    <ul className="mx-auto">
                        {
                            onlyUsers.map((user, index) => {

                                return (
                                    <li key={index} className="flex items-center justify-start gap-2 p-2 border-b-1">
                                        <Badge content="" color={user.status} shape="circle" placement="bottom-right">
                                            <Tooltip
                                                showArrow
                                                placement="right"
                                                content={"I'm " + user.name}
                                                classNames={{
                                                    base: [
                                                        // arrow color
                                                        "before:bg-neutral-400 dark:before:bg-white",
                                                    ],
                                                    content: [
                                                        "py-2 px-4 shadow-xl",
                                                        "text-black bg-gradient-to-br from-white to-neutral-400",
                                                    ],
                                                }}
                                            >

                                                <Avatar
                                                    className="cursor-pointer"
                                                    radius="full"
                                                    src={user.avatar}
                                                />
                                            </Tooltip>
                                        </Badge>
                                        <p className="text-base font-medium">{user.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* <p className="text-center  text-sm text-gray-500">Total Users: {onlyUsers.length} </p> */}
            </div>
        </>
    )
}

