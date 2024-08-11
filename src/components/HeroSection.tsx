import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='p-4 text-center'>
            <h1 className='mt-20 md:mt-0 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
            <p className='font-normal mt-4 text-neutral-300 text-base md:text-lg max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className='mt-4'>
            <Link href={"/courses"}>
            Explore Courses</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection