import { Suspense } from 'react';
import VolumesList from './_components/VolumesList';
import LatestArticles from './_components/LatestArticles';

export const metadata = {
  title: "Volumes | Crinfo Global Publishers",
  description: "Browse volumes and issues published by Crinfo Global Publishers.",
};

const Page = () => {
  return (
    <div className='min-h-screen bg-white mt-16 py-8 px-5'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Volumes</h1>
          <div className='w-full h-px bg-gray-300'></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Volumes List with Suspense */}
          <div className="lg:col-span-1">
            <Suspense fallback={<div className="animate-pulse space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-20 bg-gray-100 rounded-lg w-full"></div>
              ))}
            </div>}>
              <VolumesList />
            </Suspense>
          </div>

          {/* Right Column: Latest Articles with Suspense */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Latest Articles</h3>
              <Suspense fallback={<div className="animate-pulse space-y-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-16 bg-gray-200/50 rounded-lg w-full"></div>
                ))}
              </div>}>
                <LatestArticles />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
