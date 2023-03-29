'use client'
import React from 'react'

const Trailer = () => {
  return (
    <main className='w-full h-52 border border-black'>
      <video controls>
    <source src='https://www.youtube.com/watch?v=Jq57zqfqF6s' type='video/mp4' />
      </video>
    </main>
  )
}

export default Trailer