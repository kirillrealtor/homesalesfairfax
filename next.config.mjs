/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/subdivisions/fairfax-city',
        destination: '/fairfax-city-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/arlington-county',
        destination: '/divisions/arlington-county',
        permanent: true,
      },
      {
        source: '/subdivisions/northampton-place',
        destination: '/communities/northampton-place',
        permanent: true,
      },
      {
        source: '/subdivisions/city-of-alexandria',
        destination: '/divisions/alexandria-city',
        permanent: true,
      },
      {
        source: '/subdivisions/loudoun-county',
        destination: '/divisions/loudoun-county',
        permanent: true,
      },
      {
        source: '/subdivisions/prince-william-county',
        destination: '/divisions/prince-william-county',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
