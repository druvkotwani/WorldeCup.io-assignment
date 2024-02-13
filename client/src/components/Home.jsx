import { Avatar } from "@nextui-org/react";
import { Input, Button } from "@nextui-org/react";
import { UserIcon } from "../utils/Icons";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Home() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');

    };
    const backgroundImageUrl = "https://wordlecup.io/static/media/greybackground.40cdbc3f043f9a9c9357.webp";

    return (
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="flex flex-col items-center justify-center h-screen">
                <Avatar size="xl" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <h1 className="sm:text-4xl text-white font-bold text-xl">WordleCup.io ChatApp Assignment</h1>

                <div className="flex sm:flex-row flex-col gap-2 items-center justify-center my-4 w-full" >

                    <form value={name} className="w-4/6 mx-2" onSubmit={(e) => handleSubmit(e)}>
                        <Input radius='sm' type="name" label="Name" value={name} onChange={handleChange} />
                    </form>
                    <Button onClick={handleSubmit} color="primary" radius='sm' startContent={<UserIcon />} >
                        Login
                    </Button>
                </div>



                {/* <p className="text-lg mt-4 text-white">Created with 💗 by Dhruv</p> */}
            </div>


        </div>
    )
}