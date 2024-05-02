/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
        return [
            {
                // Sets security headers for all routes
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',   value: 'SAMEORIGIN'
                    }
                ],
            },
        ];
    },
}

module.exports = nextConfig
