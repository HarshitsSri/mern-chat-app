import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'


const OtherUser = (props) => {

    const {selectedUser}=useSelector(store=>store.user)

    const dispatch= useDispatch()
    const user = props.user
    const clickHandler =(user)=>{
        dispatch(setSelectedUser(user));
        
    }
    

    return (
        <div className='bg-gray-900 h-fit pt-2 px-1 rounded-sm' onClick={()=>clickHandler(user)}>
            <div className={` ${selectedUser?._id === user?._id ? `bg-zinc-700`:``}   flex gap-2 items-center  border-gray-500 p-1  w-full rounded-lg`}>
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