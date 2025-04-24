import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const { version } = require('./package.json');

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
