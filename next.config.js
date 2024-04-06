/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "tosk.com",
            },
            {
                protocol: 'https',
                hostname: "cdn.osxdaily.com",
            }
        ]
    }

}

module.exports = nextConfig
