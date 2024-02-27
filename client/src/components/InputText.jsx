import React, { useState } from 'react'
import { Input, Button } from "@nextui-org/react";
import { SendIcon } from '../utils/Icons';

const InputText = ({ addMessage, handleTyping }) => {
    const [message, setMessage] = useState('');

    const addAMessage = () => {
        if (message.trim().length === 0) return;
        addMessage({ message });
        setMessage('');
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
        // Call handleTyping to indicate that the user is typing
        handleTyping();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addAMessage();
    };

    return (
        <div className='py-2 flex items-center gap-3 w-[90%]'>
            <form className='w-full' onSubmit={handleSubmit}>
                <Input
                    color='primary'
                    variant='bordered'
                    type="text"
                    radius='sm'
                    placeholder="Start Chatting..."
                    value={message}
                    onChange={handleChange}
                />
            </form>
            <Button
                disabled={message.trim().length === 0}
                isIconOnly
                aria-label="Send message"
                variant='light'
                onClick={addAMessage}
            >
                <SendIcon />
            </Button>
        </div>
    );
};

export default InputText;
