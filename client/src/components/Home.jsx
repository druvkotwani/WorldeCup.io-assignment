import { Avatar } from "@nextui-org/react";
import { Input, Button } from "@nextui-org/react";
import { UserIcon } from "../utils/Icons";
import { useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import _ from 'lodash'


export default function Home() {
    const [name, setName] = useState('');
    const getRandomIndex = () => Math.floor(Math.random() * 999);
    const random = useMemo(() => getRandomIndex(), []);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        if (!name) return
        e.preventDefault();
        localStorage.setItem("name", name)
        localStorage.setItem("avatar", `https://i.pravatar.cc/150?u=a04258a${_.random(100, 999)}d826712d`)
        {
            name.length > 0 && navigate('/chats');
        }
        setName('');

    };
    const backgroundImageUrl = "https://wordlecup.io/static/media/greybackground.40cdbc3f043f9a9c9357.webp";

    return (
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="flex flex-col items-center justify-center h-screen">
                <Avatar radius='sm' size="xl" src={`https://i.pravatar.cc/150?u=a04258a${random}2d826712d`} />
                <h1 className="sm:text-4xl text-white font-bold text-xl">WordleCup.io ChatApp Assignment</h1>

                <div className="flex sm:flex-row flex-col gap-2 items-center justify-center my-4 w-full" >

                    <form value={name} className="w-4/6 mx-2" onSubmit={(e) => handleSubmit(e)}>
                        <Input radius='sm' type="text" label="Name" value={name} onChange={handleChange} />
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