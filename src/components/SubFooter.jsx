import React from 'react'

const SubFooter = () => {
  return (
    <div className='bg-black w-full min-h-[350px] rounded-t-[10%] mt-5'>

<div className='w-full flex items-center justify-center py-5 '>


<img alt='' className='w-[117px] w-[85px]'
 src='https://images.squarespace-cdn.com/content/v1/6658dc833079153370a6e050/8cc11fdd-c86a-44de-a304-8e6b9402f4ff/af62e39726f946b578b8a8dff0f5220b.png?format=500w' />
    </div>

    <div className='flex flex-col md:flex-row md:items-center justify-between px-5 gap-5 pb-15'>

        <div className=''>
   <h1 className='text-white  font-bold text-2xl'>Beast Games from< br className=''/> MrBeast®</h1>
   <p className='text-white '><span className='text-white underline'> MrBeast Privacy Policy </span> <span className='text-white no-underline'> © 2025</span> </p>
        </div>
     

        <div className='flex flex-col gap-2'>
            <h1 className='text-white md:text-end font-bold text-2xl'> Resources</h1>
            <div className=' flex flex-col md:items-end'>
                <p className='underline text-white font-bold'> Data protection Policy</p>
                <p className='underline text-white font-bold'> Privacy Policy</p>
                   <p className='underline text-white font-bold'>Cookie Policy Policy</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default SubFooter