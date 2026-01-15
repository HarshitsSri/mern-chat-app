import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers.jsx'
import { useSelector } from 'react-redux';
import store from '../redux/store.js';  

const OtherUsers = () => {

    useGetOtherUsers();
    const { otherUsers } = useSelector(store => store.user);
    if (!otherUsers) return; //early return check

    return (
        <div>
            {
                otherUsers?.map((user)=>{
                    return (
                        <OtherUser key={user._id} user={user}/>
                    )
                })
            }


        </div>
    )
}

export default OtherUsers