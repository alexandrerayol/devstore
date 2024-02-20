/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // Imagens do Github
                hostname: 'github.com',
                protocol: 'https',
              },
              {
                // Imagens do diretório /public
                hostname: '*',
                protocol: 'http',
              }
        ]
    }
};

export default nextConfig;
