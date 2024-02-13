import { Avatar } from "@nextui-org/react";
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";


export default function Home() {
    return (
        <div>

            <div className="flex flex-col items-center justify-center h-screen">
                <Avatar size="xl" src="https://avatars.dicebear.com/api/avataaars/1234.svg" />
                <h1 className="text-4xl font-bold">WordleCup.io ChatApp Assignment</h1>
                <p className="text-lg mt-4">Created with 💗 by Dhruv</p>
            </div>


        </div>
    )
}