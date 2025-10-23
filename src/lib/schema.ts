import { BASE_URL } from '~/constants/config';

// Base organization schema for Vidyanugraha Education Trust
export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${BASE_URL}#organization`,
    name: 'Vidyanugraha Education Trust',
    alternateName: 'Vidyanugraha',
    url: BASE_URL,
    logo: `${BASE_URL}vidyanugraha-logo.jpg`,
    image: `${BASE_URL}vidyanugraha-logo.jpg`,
    description: 'We deliver foundational education with a human touch, offering faculty recruitment and management services.',
    foundingLocation: {
        '@type': 'Place',
        name: 'Moodbidri, Karnataka, India',
    },
    areaServed: [
        {
            '@type': 'Place',
            name: 'Karnataka, India',
        },
        {
            '@type': 'Place',
            name: 'Mangalore, India',
        },
        {
            '@type': 'Place',
            name: 'Udupi, India',
        },
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'vidyanugraha.edu@gmail.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Kannada'],
    },
    sameAs: [],
    knowsAbout: [
        'Faculty Recruitment',
        'Faculty Management',
        'Educational Services',
        'NEET Coaching',
        'JEE Coaching',
        'CET Coaching',
        'PUC Education',
    ],
    serviceType: [
        'Faculty Recruitment',
        'Faculty Management',
        'Administrative Services',
        'Coaching Services',
    ],
};

// Website schema
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}#website`,
    url: BASE_URL,
    name: 'Vidyanugraha Education Trust',
    description: 'We deliver foundational education with a human touch, offering faculty recruitment and management services.',
    publisher: {
        '@id': `${BASE_URL}#organization`,
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
};

// Services offered by the organization
export const servicesSchema = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${BASE_URL}#faculty-recruitment`,
        name: 'Faculty Recruitment',
        description: 'Comprehensive recruitment services to find the right educators for your institution.',
        provider: {
            '@id': `${BASE_URL}#organization`,
        },
        serviceType: 'Educational Recruitment',
        areaServed: {
            '@type': 'Place',
            name: 'Karnataka, India',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Faculty Recruitment Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Subject Matter Expert Recruitment',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Faculty Screening Process',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Quick Faculty Placement',
                    },
                },
            ],
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${BASE_URL}#faculty-management`,
        name: 'Faculty Management',
        description: 'Complete faculty management solutions including performance monitoring and development.',
        provider: {
            '@id': `${BASE_URL}#organization`,
        },
        serviceType: 'Educational Management',
        areaServed: {
            '@type': 'Place',
            name: 'Karnataka, India',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Faculty Management Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Performance Tracking',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Professional Development',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Continuous Faculty Support',
                    },
                },
            ],
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${BASE_URL}#coaching-services`,
        name: 'Coaching Services',
        description: 'Specialized coaching programs for competitive exams and academic excellence.',
        provider: {
            '@id': `${BASE_URL}#organization`,
        },
        serviceType: 'Educational Coaching',
        areaServed: {
            '@type': 'Place',
            name: 'Karnataka, India',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Coaching Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Course',
                        name: 'NEET Preparation',
                        description: 'Medical entrance exam preparation',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Course',
                        name: 'JEE Coaching',
                        description: 'Engineering entrance exam coaching',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Course',
                        name: 'CET Guidance',
                        description: 'Common Entrance Test preparation',
                    },
                },
            ],
        },
    },
];

// Trustees and academic advisor schemas
export const peopleSchema = [
    {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${BASE_URL}#adarsh-hegde`,
        name: 'Adarsh Hegde',
        jobTitle: 'Trustee',
        worksFor: {
            '@id': `${BASE_URL}#organization`,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Udupi',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
        },
        image: `${BASE_URL}images/trustees/adarsh_hegde.jpg`,
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${BASE_URL}#sahana`,
        name: 'Sahana',
        jobTitle: 'Trustee',
        worksFor: {
            '@id': `${BASE_URL}#organization`,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Udupi',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
        },
        image: `${BASE_URL}images/trustees/Sahana.png`,
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${BASE_URL}#jude-jeevan-correa`,
        name: 'Jude Jeevan Correa',
        jobTitle: 'Trustee',
        worksFor: {
            '@id': `${BASE_URL}#organization`,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mangaluru',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
        },
        image: `${BASE_URL}images/trustees/jude_jeevan_correa.jpg`,
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${BASE_URL}#dr-jaison-sequeira`,
        name: 'Dr. Jaison Sequeira',
        jobTitle: 'Academic Advisor',
        worksFor: {
            '@id': `${BASE_URL}#organization`,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mangaluru',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
        },
        image: `${BASE_URL}images/trustees/dr.jaison_sequeira.jpg`,
    },
];

// Breadcrumb list for navigation
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
    })),
});

// FAQ schema generator
export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
});

// Video schema for chairman speaks video
export const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${BASE_URL}#chairman-speaks-video`,
    name: 'Chairman Speaks - Vidyanugraha Education Trust',
    description: 'Message from the Chairman of Vidyanugraha Education Trust about our mission and vision.',
    thumbnailUrl: `${BASE_URL}images/banner/college_building.webp`,
    contentUrl: `${BASE_URL}videos/chairman_speaks.mp4`,
    embedUrl: `${BASE_URL}videos/chairman_speaks.mp4`,
    uploadDate: new Date().toISOString(),
    duration: 'PT5M', // Adjust based on actual video duration
    publisher: {
        '@id': `${BASE_URL}#organization`,
    },
    inLanguage: 'en-IN',
};

// Local business schema for contact information
export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}#localbusiness`,
    name: 'Vidyanugraha Education Trust',
    image: `${BASE_URL}vidyanugraha-logo.jpg`,
    description: 'We deliver foundational education with a human touch, offering faculty recruitment and management services.',
    url: BASE_URL,
    telephone: '+91-85480-88424',
    email: 'vidyanugraha.edu@gmail.com',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Moodbidri',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.0827,
        longitude: 74.8740,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '17:00',
    },
    sameAs: [],
};

// Course schemas for coaching services
export const courseSchemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${BASE_URL}#neet-course`,
        name: 'NEET Preparation Course',
        description: 'Comprehensive NEET preparation course with experienced faculty and proven methodology.',
        provider: {
            '@id': `${BASE_URL}#organization`,
        },
        courseCode: 'NEET-PREP',
        educationalLevel: 'Pre-University',
        teaches: 'Medical entrance exam preparation',
        timeRequired: 'P1Y',
        inLanguage: 'en-IN',
        availableLanguage: ['English', 'Kannada'],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${BASE_URL}#jee-course`,
        name: 'JEE Preparation Course',
        description: 'Engineering entrance exam preparation with focus on JEE Main and Advanced.',
        provider: {
            '@id': `${BASE_URL}#organization`,
        },
        courseCode: 'JEE-PREP',
        educationalLevel: 'Pre-University',
        teaches: 'Engineering entrance exam preparation',
        timeRequired: 'P1Y',
        inLanguage: 'en-IN',
        availableLanguage: ['English', 'Kannada'],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${BASE_URL}#cet-course`,
        name: 'CET Preparation Course',
        description: 'Karnataka Common Entrance Test preparation with state-specific focus.',
        provider: {
            '@id': `${BASE_URL}#organization`,
        },
        courseCode: 'CET-PREP',
        educationalLevel: 'Pre-University',
        teaches: 'State entrance exam preparation',
        timeRequired: 'P1Y',
        inLanguage: 'en-IN',
        availableLanguage: ['English', 'Kannada'],
    },
];

// Review schema (you can add actual reviews later)
export const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${BASE_URL}#review-aggregate`,
    itemReviewed: {
        '@id': `${BASE_URL}#organization`,
    },
    reviewRating: {
        '@type': 'Rating',
        ratingValue: 4.8,
        bestRating: 5,
        worstRating: 1,
    },
    author: {
        '@type': 'Organization',
        name: 'Partner Institutions',
    },
    reviewBody: 'Excellent faculty recruitment and management services with professional approach.',
};

// Event schema for educational events (you can customize this)
export const eventSchema = (eventData: {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    location?: string;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    name: eventData.name,
    description: eventData.description,
    startDate: eventData.startDate,
    endDate: eventData.endDate,
    location: eventData.location ? {
        '@type': 'Place',
        name: eventData.location,
    } : undefined,
    organizer: {
        '@id': `${BASE_URL}#organization`,
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
});

// Article schema for blog posts or news (if you add them later)
export const articleSchema = (articleData: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    image?: string;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleData.headline,
    description: articleData.description,
    image: articleData.image || `${BASE_URL}vidyanugraha-logo.jpg`,
    datePublished: articleData.datePublished,
    dateModified: articleData.dateModified || articleData.datePublished,
    author: {
        '@type': 'Organization',
        name: articleData.author || 'Vidyanugraha Education Trust',
    },
    publisher: {
        '@id': `${BASE_URL}#organization`,
    },
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': BASE_URL,
    },
});