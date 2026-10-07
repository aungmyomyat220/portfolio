import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async redirects() {
        return ['home', 'techstack', 'experience', 'project', 'contact'].map((section) => ({
            source: `/:locale(en|jp)/${section}`,
            destination: `/:locale#${{home: 'home', techstack: 'skills', experience: 'experience', project: 'projects', contact: 'contact'}[section]}`,
            permanent: true
        }));
    }
};

export default withNextIntl(nextConfig);