
import React from 'react'

export default function Loading() {
    return (
        <div className='min-h-screen bg-white mt-16 py-8 px-5'>
            <div className='max-w-3xl mx-auto'>
                <div className='space-y-4 mb-8'>
                    <div className='h-4 w-32 bg-gray-100 animate-pulse rounded' />
                    <div className='h-10 w-full bg-gray-200 animate-pulse rounded' />
                    <div className='h-10 w-2/3 bg-gray-200 animate-pulse rounded' />
                    <div className='h-4 w-40 bg-gray-100 animate-pulse rounded' />
                </div>

                <div className='flex gap-2 mb-8'>
                    <div className='h-10 w-32 bg-gray-200 animate-pulse rounded' />
                    <div className='h-10 w-24 bg-gray-200 animate-pulse rounded' />
                    <div className='h-10 w-24 bg-gray-200 animate-pulse rounded' />
                </div>

                <div className='space-y-4'>
                    <div className='h-6 w-48 bg-gray-200 animate-pulse rounded' />
                    <div className='space-y-2'>
                        <div className='h-4 w-full bg-gray-100 animate-pulse rounded' />
                        <div className='h-4 w-full bg-gray-100 animate-pulse rounded' />
                        <div className='h-4 w-full bg-gray-100 animate-pulse rounded' />
                        <div className='h-4 w-3/4 bg-gray-100 animate-pulse rounded' />
                    </div>
                </div>
            </div>
        </div>
    )
}
