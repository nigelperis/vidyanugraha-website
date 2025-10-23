import { BASE_URL } from '~/constants/config';

export interface SitemapEntry {
    url: string;
    lastModified?: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}

export const sitemapEntries: SitemapEntry[] = [
    {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
    },
    {
        url: `${BASE_URL}about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${BASE_URL}colleges`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: `${BASE_URL}contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    },
];