import React from 'react'

const OtherUser = (props) => {
    const user=props.user
  return (
    <div className='bg-gray-900 h-fit pt-2 px-1 rounded-sm'>
            <div className='flex gap-2 items-center  border-gray-500 p-1  hover:bg-zinc-700 w-full rounded-lg'>
                <div className='avatar online p-1'>
                    <div className='w-8 rounded-full '>
                        <img src={user?.profilePhoto} alt="profile_photo" />
                    </div>
                </div>

                <div className=''>
                    <div className='f'>
                        <p className='font-semibold'>{user?.fullname}</p>
                    </div>
                </div>

            </div>
           
        </div>
  )
}

export default OtherUser