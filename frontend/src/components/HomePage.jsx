import React from 'react'
import Sidebar from './Sidebar'
import Messagebox from './Messagebox'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550]px h-[90%] rounded overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 w-[80%]'>
      <Sidebar/>
      <div className="divider divider-horizontal mx-0 rounded-full "></div>
      <Messagebox/>
    </div>
  )
}

export default HomePage