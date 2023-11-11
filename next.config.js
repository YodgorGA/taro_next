/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    images:{
        deviceSizes:[1920,1152,1151,640]
    },
    reactStrictMode:false,
//    assetPrefix: isProd ? 'https://cdn.portalofmagic.ru' : undefined,
}

module.exports = nextConfig
