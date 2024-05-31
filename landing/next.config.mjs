/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/lirapack',
    assetPrefix: '/lirapack',
    publicRuntimeConfig: {
        assetPrefix: '/lirapack',
    },
    images: {
        unoptimized: true,
        loader: 'imgix',
        path: '',
    },
};

export default nextConfig;
