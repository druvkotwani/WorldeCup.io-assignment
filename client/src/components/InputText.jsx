import React, { useState } from 'react'
import { Input, Button } from "@nextui-org/react";
import { SendIcon } from '../utils/Icons';

export default function InputText({ addMessage }) {

    const [message, setMessage] = useState('')

    function addAMessage() {
        console.log(message)
        addMessage({
            message
        })
        setMessage('')
    }

    return (
        <div className='w-full flex items-center gap-3  p-3  ' >
            <form className='w-full' value='message' onSubmit={(e) => {
                e.preventDefault()
                addAMessage()
            }} >
                <Input type="text" radius='sm' placeholder="Start Chatting..." value={message} onChange={(e) => setMessage(e.target.value)} />
            </form>
            <Button isIconOnly aria-label="Send message" variant='faded' radius='sm' onClick={() => addAMessage()} >
                <SendIcon />
            </Button>
        </div>
    )
}