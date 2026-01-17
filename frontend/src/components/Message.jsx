import React from 'react'

const Message = ({message}) => {

    return (
        <div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-bubble">{message.message}</div>
            </div>
        </div>
    )
}

export default Message