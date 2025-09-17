import React from 'react'

const page = () => {
  const volumesData = [
    {
      volume: 7,
      issues: [
        { issue: 1, month: 'March', year: 2025 },
        { issue: 2, month: 'June', year: 2025 },
        { issue: 3, month: 'September', year: 2025 }
      ]
    },
    {
      volume: 6,
      issues: [
        { issue: 1, month: 'March', year: 2024 },
        { issue: 2, month: 'June', year: 2024 },
        { issue: 3, month: 'September', year: 2024 },
        { issue: 4, month: 'December', year: 2024 }
      ]
    },
    {
      volume: 5,
      issues: [
        { issue: 1, month: 'March', year: 2023 },
        { issue: 2, month: 'June', year: 2023 },
        { issue: 3, month: 'September', year: 2023 },
        { issue: 4, month: 'December', year: 2023 }
      ]
    },
    {
      volume: 4,
      issues: [
        { issue: 1, month: 'March', year: 2022 },
        { issue: 2, month: 'June', year: 2022 },
        { issue: 3, month: 'September', year: 2022 },
        { issue: 4, month: 'December', year: 2022 }
      ]
    },
    {
      volume: 3,
      issues: [
        { issue: 1, month: 'March', year: 2021 },
        { issue: 2, month: 'June', year: 2021 },
        { issue: 3, month: 'September', year: 2021 },
        { issue: 4, month: 'December', year: 2021 }
      ]
    },
    {
      volume: 2,
      issues: [
        { issue: 1, month: 'March', year: 2020 },
        { issue: 2, month: 'June', year: 2020 },
        { issue: 3, month: 'September', year: 2020 },
        { issue: 4, month: 'December', year: 2020 }
      ]
    },
    {
      volume: 1,
      issues: [
        { issue: 1, month: 'September', year: 2019 },
        { issue: 2, month: 'December', year: 2019 }
      ]
    }
  ]

  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-4xl mx-auto'>
       

       
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Volumes</h1>
          <div className='w-full h-px bg-gray-300'></div>
        </div>

       
        <div className='space-y-0'>
          {volumesData.map((volumeData, index) => (
            <div key={volumeData.volume}>
             
              <div className='mb-4'>
                <h2 className='text-xl font-bold text-blue-600 mb-3'>
                  Volume - {volumeData.volume}
                </h2>
                
                
                <div className='ml-6 space-y-1 mb-6'>
                  {volumeData.issues.map((issue, issueIndex) => (
                    <div key={issueIndex} className='text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-200'>
                      Issue - {issue.issue} | {issue.month} {issue.year}
                    </div>
                  ))}
                </div>
              </div>

             
              {index < volumesData.length - 1 && (
                <div className='w-full h-px bg-gray-300 mb-6'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
