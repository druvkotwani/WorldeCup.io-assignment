import { Avatar, Badge } from '@nextui-org/react'

export default function ChatBoxReciever({ avatar, message, color }) {
    const myStyle = {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0.7em',
        borderBottomRightRadius: '0.7em',
        borderBottomLeftRadius: '0.7em'
    };
    return (
        <div className='flex flex-row justify-start  m-2 mt-3' >

            <div>
                <Badge content="" color={color} shape="circle" placement="bottom-right">
                    <Avatar
                        radius="full"
                        src={avatar}
                    />
                </Badge>
            </div>

            <p style={myStyle} className='mx-2 px-3 py-2 bg-[#eec1c1]  max-w-60 '  >
                {message}
            </p>

        </div >
    )
}
export function ChatBoxSender({ avatar, message, color }) {
    const myStyle = {
        borderTopLeftRadius: '0.7em',
        borderTopRightRadius: '0.7em',
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '0.7em'
    };
    return (
        <div className='flex flex-row justify-end  m-2 mt-3' >
            <div>

                <Badge content="" color={color} shape="circle" placement="bottom-right">
                    <Avatar
                        radius="full"
                        src={avatar}
                    />
                </Badge>
            </div>
            <p style={myStyle} className='mx-2 px-3 py-2  bg-[#dcf8c6] rounded-lg max-w-60 '  >
                {message}
            </p>

        </div>
    )
}
