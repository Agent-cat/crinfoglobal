import React from 'react'
import { getPublicVolumes } from '../../utils/serverApi'
import Link from 'next/link';

export const metadata = {
  title: "Volumes | Crinfo Global Publishers",
  description: "Browse volumes and issues published by Crinfo Global Publishers.",
};

const Page = async () => {
  let volumes = [];
  try {
    volumes = await getPublicVolumes();
  } catch (error) {
    console.error("Error fetching volumes:", error);
  }

  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Volumes</h1>
          <div className='w-full h-px bg-gray-300'></div>
        </div>

        {volumes.length === 0 ? (
          <div className='text-gray-600 italic'>No volumes available at the moment.</div>
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
                      <Link
                        key={issue.id}
                        href={`/issue/${issue.id}`}
                        className='block text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-200'
                      >
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
