
import React from 'react'

export default function Loading() {
    return (
        <div className='min-h-screen bg-white mt-16 py-8 px-5'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-8'>
                    <div className='h-9 w-48 bg-gray-200 animate-pulse rounded mb-2' />
                    <div className='w-full h-px bg-gray-300'></div>
                </div>

                <div className='space-y-8'>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className='space-y-4'>
                            <div className='h-7 w-32 bg-gray-200 animate-pulse rounded' />
                            <div className='ml-6 space-y-2'>
                                <div className='h-5 w-64 bg-gray-100 animate-pulse rounded' />
                                <div className='h-5 w-56 bg-gray-100 animate-pulse rounded' />
                            </div>
                            {i < 3 && <div className='w-full h-px bg-gray-200' />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
