import { getPublicVolumes } from '../../../utils/serverApi';
import Link from 'next/link';

export default async function VolumesList() {
    const volumes = await getPublicVolumes();

    if (!volumes || volumes.length === 0) {
        return <div className='text-gray-600 italic'>No volumes available at the moment.</div>;
    }

    return (
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
    );
}
