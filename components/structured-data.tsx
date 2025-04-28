export const WebsiteStructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GetXCloud",
          url: "https://getxcloud.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://getxcloud.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  )
}

export const ServiceStructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Cloud Services",
          provider: {
            "@type": "Organization",
            name: "GetXCloud",
          },
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Cloud Services Catalog",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud Hosting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Backup & Storage",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Email Services",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "VPS Hosting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Security Solutions",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Monitoring",
                },
              },
            ],
          },
        }),
      }}
    />
  )
}
