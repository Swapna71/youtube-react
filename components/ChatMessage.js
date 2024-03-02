import React from 'react'

const ChatMessage = ({name, comment}) => {
  return (
    <div className='flex items-center bg-gray-100 shadow-sm mx-2'>
       <img
          className="h-10 p-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s"
          alt="user"
        />
        <span className='px-2 text-base font-medium text-gray-500'>{name}</span>
        <span className='break-words'>{comment}</span>
    </div>
  )
}

export default ChatMessage
