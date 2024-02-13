import { Avatar } from '@nextui-org/react'

export default function ChatBoxReciever({ avatar, user, message }) {
    return (
        <div className='flex flex-row justify-start  m-2' >
            <Avatar isBordered src={avatar} radius="sm" />

            <p className='mx-2 p-3 bg-[#dcf8c6] rounded-lg max-w-60 '  >
                <strong className='text-base  ' >
                    {user}
                </strong> <br></br>
                {message}
            </p>

        </div>
    )
}
export function ChatBoxSender({ avatar, user, message }) {
    return (
        <div className='flex flex-row justify-end  m-2' >
            <Avatar isBordered src={avatar} radius="sm" />

            <p className='mx-2 p-3 bg-[#eec1c1] rounded-lg max-w-60 '  >
                <strong className='text-base  ' >
                    {user}
                </strong> <br></br>
                {message}
            </p>

        </div>
    )
}
