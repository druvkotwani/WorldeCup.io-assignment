import ChatContainer from './ChatContainer';
import { ChatIcon, LogoutIcon } from '../utils/Icons';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom'

const ChatHome = () => {
    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem('name')
        localStorage.removeItem('avatar')
        localStorage.removeItem('status')
        localStorage.removeItem('about')
        // setUser('')
        navigate('/')
    }
    return (
        <div className='h-full w-full sm:w-5/6 lg:w-4/6 mx-auto  mt-1'>
            <div className='h-16 bg-[#F6FAFE] flex items-center justify-between px-6 '>
                <h1 className='sm:text-2xl text-lg  gap-2 presStart flex items-center justify-center'>
                    <ChatIcon />
                    Chat-Room
                </h1>
                <Button onClick={() => logout()} className="flex items-center justify-center min-w-6 sm:min-w-6  " radius="sm" variant="flat"  >
                    <LogoutIcon className="mr-2" />
                    <span className='hidden sm:block font-bold'>Leave Room</span>
                </Button>
            </div>
            <div>
                <ChatContainer logout={logout} />
            </div>
        </div>
    );
}

export default ChatHome;
