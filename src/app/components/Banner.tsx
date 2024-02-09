import React from 'react'

function Banner() {
  return (
    <div className="relative overflow-hidden h-[50vh] md:h-[80vh]">
    {/* Hero Image */}
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover object-center"
        src="https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Hero Image"
      />
    </div>
    {/* Color Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    {/* Hero content */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
     <form className='md:w-[50%] w-[90%] rounded bg-white flex items-center justify-between'>
        <input type="text" className='w-full rounded outline-none border-none pl-3 text-black h-[10vh]' name="" id="" />
         <div className='h-full p-1'>
         <button className='text-white h-full rounded bg-primaryColor font-extrabold  w-[100px]'>Search</button>
         </div>
     </form>
    </div>
  </div>
  )
}

export default Banner