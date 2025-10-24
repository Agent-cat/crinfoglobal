"use client";
import React, { useEffect, useState } from 'react'
import { listPublicVolumes } from '../../utils/api'
import Link from 'next/link';

const Page = () => {
  const [volumes, setVolumes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await listPublicVolumes()
        setVolumes(data)
      } catch (_) {
        setVolumes([])
      }
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Volumes</h1>
          <div className='w-full h-px bg-gray-300'></div>
        </div>

        {loading ? (
          <div className='space-y-2'>
            <div className='h-6 w-40 bg-gray-200 animate-pulse rounded' />
            <div className='h-6 w-64 bg-gray-200 animate-pulse rounded' />
            <div className='h-6 w-56 bg-gray-200 animate-pulse rounded' />
          </div>
        ) : (
          <div className='space-y-0'>
            {volumes.map((v, index) => (
              <div key={v.id}>
                <div className='mb-4'>
                  <h2 className='text-xl font-bold text-blue-600 mb-3'>
                    Volume - {v.number}
                  </h2>
                  <div className='ml-6 space-y-1 mb-6'>
                    {(v.issues || []).map((issue) => (
                      <Link key={issue.id} href={`/issue/${issue.id}`} className='block text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-200'>
                        Issue - {issue.number} | {issue.month} {issue.year}
                      </Link>
                    ))}
                  </div>
                </div>
                {index < volumes.length - 1 && (
                  <div className='w-full h-px bg-gray-300 mb-6'></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
