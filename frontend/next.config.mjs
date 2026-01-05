/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'crinfoglobal.com',
            },
            {
                protocol: 'https',
                hostname: 'external-content.duckduckgo.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/article_repo/:path*',
                destination: `${process.env.NEXT_PUBLIC_CONTENT_API_URL}/article_repo/:path*`,
            },
        ];
    },
};

export default nextConfig;
