/** @type {import('next').NextConfig} */
const nextConfig = {
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')], // 2. sassOptions 옵션 추가
  // },

  images: {
    domains: ['image.aladin.co.kr'], // 외부 이미지를 가져올 도메인 추가
  },
};

export default nextConfig;
