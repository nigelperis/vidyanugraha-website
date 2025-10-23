import { MetadataRoute } from 'next';
import { sitemapEntries } from '~/lib/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
    return sitemapEntries.map((entry) => ({
        url: entry.url,
        lastModified: entry.lastModified || new Date(),
        changeFrequency: entry.changeFrequency || 'monthly',
        priority: entry.priority || 0.5,
    }));
}