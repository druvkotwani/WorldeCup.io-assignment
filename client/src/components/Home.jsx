import { Input, Button } from "@nextui-org/react";
import { TrophyIcon, UserIcon } from "../utils/Icons";
import { useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import _ from 'lodash'
import SelectStatus from "./Dropdown";
import { animals } from "./Dropdown";

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
    const handleSelectChange = (e) => {
        localStorage.setItem('status', e.target.value);
    };


    return (
        <div className="bg-cover" style={{ backgroundImage: `url('/images/background.webp')` }}>
            <div className="flex flex-col items-center justify-center h-screen">

                <div className="fixed top-5  pb-3 sm:px-12 px-6 border-b w-full flex items-center justify-center ">
                    <h1 className=" sm:text-4xl text-white font-bold text-2xl flex gap-3 items-center justify-center">
                        <img src="/images/wordlecup.png" alt="wordle" className="h-8 w-8 sm:w-10  sm:h-10" />
                        WordleCup.io
                    </h1>
                </div>

                <div className="inline-flex w-full items-center justify-center gap-2">
                    <p className="text-xl sm:text-xl font-bold text-white">Select your status:</p>
                    <div className="flex justify-center items-center xl:w-[10%] w-3/6 md:w-2/6 lg ">
                        <SelectStatus handleChange={handleSelectChange} />
                    </div>
                </div>


                <div className="flex  gap-2 items-center justify-center my-4 w-full" >
                    <form value={name} className="sm:w-2/6 lg:w-1/6 w-3/6 mx-2" onSubmit={(e) => handleSubmit(e)}>
                        <Input radius='sm' type="text" placeholder="Enter Your Name.." value={name} onChange={handleChange} />
                    </form>
                    <Button onClick={handleSubmit} color="primary" radius='sm' startContent={<UserIcon />} >
                        Login
                    </Button>
                </div>

                <div className="fixed bottom-1 mb-1 sm:px-12 px-6 border-t w-full flex items-center justify-center ">
                    <p className="text-base mt-4 text-white">ChatApp Asignment done with 💗 by
                        <a href="https://dhruvkotwani.me" className="text-primary text-base"> Dhruv</a>
                    </p>
                </div>

            </div>


        </div>
    )
}