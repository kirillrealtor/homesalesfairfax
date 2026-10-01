/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Sell, Home valuation, and Contact page redirects
      {
        source: '/sell',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home-valuation',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/',
        permanent: true,
      },

      // Market reports redirects
      {
        source: '/market-report',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mantua-real-estate',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mosby-woods-market',
        destination: '/',
        permanent: true,
      },
      {
        source: '/franklin-farm-values',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kings-park-west-real-estate',
        destination: '/',
        permanent: true,
      },

      // Fairfax City page redirect
      {
        source: '/fairfax-city-homes-for-sale',
        destination: '/',
        permanent: true,
      },

      // Communities hub and community detail pages redirects
      {
        source: '/communities',
        destination: '/',
        permanent: true,
      },
      {
        source: '/communities/:slug*',
        destination: '/',
        permanent: true,
      },

      // Specific division redirects
      {
        source: '/divisions/fairfax-county',
        destination: '/',
        permanent: true,
      },
      {
        source: '/divisions/city-of-fairfax',
        destination: '/',
        permanent: true,
      },
      {
        source: '/divisions/arlington-county',
        destination: '/arlington-va-condos-for-sale',
        permanent: true,
      },
      {
        source: '/divisions/city-of-alexandria',
        destination: '/alexandria-va-townhomes-for-sale',
        permanent: true,
      },
      {
        source: '/divisions/alexandria-city',
        destination: '/alexandria-va-townhomes-for-sale',
        permanent: true,
      },
      {
        source: '/divisions/loudoun-county',
        destination: '/',
        permanent: true,
      },
      {
        source: '/divisions/prince-william-county',
        destination: '/',
        permanent: true,
      },
      {
        source: '/divisions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/divisions/:slug*',
        destination: '/',
        permanent: true,
      },

      // Specific subdivision redirects
      {
        source: '/subdivisions/mantua',
        destination: '/',
        permanent: true,
      },
      {
        source: '/subdivisions/mosby-woods',
        destination: '/',
        permanent: true,
      },
      {
        source: '/subdivisions/franklin-farm',
        destination: '/chantilly-va-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/kings-park-west',
        destination: '/burke-va-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/country-club-hills',
        destination: '/',
        permanent: true,
      },
      {
        source: '/subdivisions/burke-centre',
        destination: '/burke-va-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/reston-town-center',
        destination: '/reston-va-townhomes-condos',
        permanent: true,
      },
      {
        source: '/subdivisions/fairlington',
        destination: '/alexandria-va-townhomes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/shirlington',
        destination: '/arlington-va-condos-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/fairfax-city',
        destination: '/',
        permanent: true,
      },
      {
        source: '/subdivisions/arlington-county',
        destination: '/arlington-va-condos-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/northampton-place',
        destination: '/alexandria-va-townhomes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/city-of-alexandria',
        destination: '/alexandria-va-townhomes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/clifton-creek',
        destination: '/fairfax-station-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/clifton-estates',
        destination: '/fairfax-station-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/mclean-hamlet',
        destination: '/great-falls-va-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/fairfax-station-woodlands',
        destination: '/fairfax-station-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/oakton-estates',
        destination: '/oakton-homes-for-sale',
        permanent: true,
      },
      {
        source: '/subdivisions/loudoun-county',
        destination: '/',
        permanent: true,
      },
      {
        source: '/subdivisions/prince-william-county',
        destination: '/',
        permanent: true,
      },
      {
        source: '/subdivisions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/subdivisions/:slug*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
