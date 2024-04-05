/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "tosk.com",
            }
        ]
    }

}

module.exports = nextConfig
