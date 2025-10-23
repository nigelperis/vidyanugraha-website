import { MetadataRoute } from 'next';
import { BASE_URL } from '~/constants/config';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/', '/admin/'],
        },
        sitemap: `${BASE_URL}sitemap.xml`,
    };
}