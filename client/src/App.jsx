import { Avatar } from "@nextui-org/react";
import ChatBoxReciever, { ChatBoxSender } from "./components/ChatBox";


export default function App() {
  return (
    <div>

      {/* <div className="flex flex-col items-center justify-center h-screen">
        <Avatar size="xl" src="https://avatars.dicebear.com/api/avataaars/1234.svg" />
        <h1 className="text-4xl font-bold">WordleCup.io ChatApp Assignment</h1>
        <p className="text-lg mt-4">Created with 💗 by Dhruv</p>
      </div> */}

      <ChatBoxReciever avatar="https://i.pravatar.cc/150?u=a04258a2462d826712d" user="Dhruv" message="Hello" />
      <ChatBoxSender avatar="https://i.pravatar.cc/150?u=a04258h2462d829712d" user="Dhruv" message="Hello I'm Dhruv, doing this assignment" />
      <ChatBoxReciever avatar="https://i.pravatar.cc/150?u=a04258a2462d826712d" user="Kotwani" message="Hello" />
      <ChatBoxSender avatar="https://i.pravatar.cc/150?u=a04258h2432d826712d" user="Unkonw" message="Hello I'm Dhruv, doing this assignment" />

    </div>
  )
}