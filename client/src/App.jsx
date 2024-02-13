import { Avatar } from "@nextui-org/react";
import ChatBoxReciever from "./components/ChatBox";


export default function App() {
  return (
    <>

      {/* <div className="flex flex-col items-center justify-center h-screen">
        <Avatar size="xl" src="https://avatars.dicebear.com/api/avataaars/1234.svg" />
        <h1 className="text-4xl font-bold">WordleCup.io ChatApp Assignment</h1>
        <p className="text-lg mt-4">Created with 💗 by Dhruv</p>
      </div> */}

      <ChatBoxReciever avatar="https://i.pravatar.cc/150?u=a04258a2462d826712d" user="Dhruv" message="Hello" />

    </>
  )
}