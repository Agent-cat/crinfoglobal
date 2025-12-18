
import React from 'react'

export default function Loading() {
    return (
        <div className='min-h-screen bg-white mt-16 py-8 px-5'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-6'>
                    <div className='h-4 w-64 bg-gray-100 animate-pulse rounded mb-2' />
                    <div className='h-8 w-3/4 bg-gray-200 animate-pulse rounded' />
                </div>

                <div className='space-y-8'>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className='border-t pt-6 space-y-3'>
                            <div className='h-4 w-8 bg-gray-50 animate-pulse rounded' />
                            <div className='h-6 w-full bg-gray-200 animate-pulse rounded' />
                            <div className='h-4 w-2/3 bg-gray-100 animate-pulse rounded' />
                            <div className='flex gap-2'>
                                <div className='h-8 w-20 bg-gray-200 animate-pulse rounded' />
                                <div className='h-8 w-16 bg-gray-200 animate-pulse rounded' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
