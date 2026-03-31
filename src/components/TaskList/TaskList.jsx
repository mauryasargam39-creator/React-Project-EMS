import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10'>
        <div className='shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'> 20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eveniet vel fuga atque, iste laudantium.
            </p>
        </div>
        <div className='shrink-0 h-full w-75 p-5 bg-blue-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'> 20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eveniet vel fuga atque, iste laudantium.
            </p>
        </div>
        <div className='shrink-0 h-full w-75 p-5 bg-green-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'> 20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eveniet vel fuga atque, iste laudantium.
            </p>
        </div>
        <div className='shrink-0 h-full w-75 p-5 bg-yellow-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'> 20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eveniet vel fuga atque, iste laudantium.
            </p>
        </div>
    </div>
  )
}

export default TaskList
