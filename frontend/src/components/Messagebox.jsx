import React from 'react'
import { IoSend } from "react-icons/io5";
import Messages from './Messages';

const Messagebox = () => {
    return (
        <div className='w-full h-full flex flex-col  justify-between'>
            <div className='bg-gray-900 h-[15%] pt-2 px-1 rounded-md '>
                <div className='flex gap-2 items-center  border-gray-500 p-1 w-full rounded-lg'>
                    <div className='avatar online p-1'>
                        <div className='w-8 rounded-full '>
                            <img src="https://images.pexels.com/photos/30994372/pexels-photo-30994372.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-30994372.jpg&fm=jpg" alt="profile_photo" />
                        </div>
                    </div>

                    <div className=''>
                        <div className='f'>
                            <p className='font-semibold'>Harshit Srivastava</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='h-[70%] overflow-auto scroll-smooth scrollbar-hide'>
                <Messages />
            </div>
            <div className=''>
                <div className='relative flex rounded-md '>

                    <input type="text" className='input relative w-full h-14 p-6 pr-12' placeholder='Type a message...' />
                    <button type="submit" className='absolute right-1 top-1 p-2'>
                        <IoSend size={32} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Messagebox