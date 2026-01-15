import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";
import OtherUsers from './OtherUsers';

const Sidebar = () => {
    return (
        <div className='flex p-4 flex-col'>
            <form action="" className='input input-bordered rounded-md flex relative'>
                <input type="text" className='bg-gray-600 p-1'
                    placeholder='Search...'
                />
                <button type='submit' className='absolute right-1 '>
                    <IoSearchCircleSharp size={32} />
                </button>
            </form>
            <div className='divider m-2 '></div>
            <div className='rounded-md bg-gray-900 h-full flex flex-col overflow-auto scrollbar-hide scroll-smooth'>
                <OtherUsers /> 
            </div>
            <div>
                <button type="submit"className='btn btn-wide btn-xs sm:btn-sm md:btn-md btn-outline btn-soft btn-error mt-1'>Logout</button>
            </div>

        </div>
    )
}

export default Sidebar