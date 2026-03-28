export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://www.helithasri.dev/#person',
        name: 'Helitha Praveen',
        url: 'https://www.helithasri.dev',
        jobTitle: 'Backend Software Engineer',
        description:
          'Backend software engineer with 3+ years of experience in fintech and payment systems, specialising in Java, Spring Boot, REST APIs, and Microservices.',
        email: 'helitha.pravin@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Colombo',
          addressCountry: 'LK',
        },
        sameAs: [
          'https://linkedin.com/in/helithasri',
          'https://github.com/HelithaSri',
        ],
        knowsAbout: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'REST APIs',
          'SOAP',
          'Microservices',
          'Docker',
          'PostgreSQL',
          'MySQL',
          'AWS',
          'CI/CD',
          'Fintech',
          'Payment Systems',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'PayMedia',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Colombo',
            addressCountry: 'LK',
          },
        },
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Cardiff Metropolitan University',
          },
          {
            '@type': 'EducationalOrganization',
            name: 'Institute of Software Engineering (IJSE)',
          },
        ],
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://www.helithasri.dev/#webpage',
        url: 'https://www.helithasri.dev/',
        name: 'Helitha Praveen — Backend Software Engineer',
        description:
          'Portfolio of Helitha Praveen, a backend software engineer based in Colombo, Sri Lanka.',
        about: { '@id': 'https://www.helithasri.dev/#person' },
        mainEntity: { '@id': 'https://www.helithasri.dev/#person' },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
