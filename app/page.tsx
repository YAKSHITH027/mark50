/* eslint-disable */
'use client'
import { useState } from 'react'

export default function Home() {
  const [item, setItem] = useState(2)
  const getPx = (val: any) => {
    val = val + '0'
    setItem(val)
  }

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='text-center mb-4'>Hello There!!</h1>
      <h1 className='text-center mb-4'>
        This is Gururaj Badiger &apos;s Website
      </h1>
      <h1 className={'text-center mb-2' + ` px${item}`}>
        Yakshith The Developer
      </h1>
      <div className='flex justify-center gap-3'>
        <button
          onClick={() => {
            getPx(2)
          }}
        >
          2x
        </button>
        <button
          onClick={() => {
            getPx(3)
          }}
        >
          3x
        </button>
        <button
          onClick={() => {
            getPx(4)
          }}
        >
          4x
        </button>
      </div>
    </div>
  )
}
