export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export function updatePageSEO(seoData: SEOData) {
  // Update title
  document.title = seoData.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seoData.description);

  // Update or create meta keywords
  if (seoData.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoData.keywords);
  }

  // Update or create meta author
  if (seoData.author) {
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', seoData.author);
  }

  // Update Open Graph tags
  updateOpenGraphTag('og:title', seoData.ogTitle || seoData.title);
  updateOpenGraphTag('og:description', seoData.ogDescription || seoData.description);
  updateOpenGraphTag('og:type', seoData.ogType || 'website');
}

function updateOpenGraphTag(property: string, content: string) {
  let ogTag = document.querySelector(`meta[property="${property}"]`);
  if (!ogTag) {
    ogTag = document.createElement('meta');
    ogTag.setAttribute('property', property);
    document.head.appendChild(ogTag);
  }
  ogTag.setAttribute('content', content);
}

export const defaultSEO: SEOData = {
  title: "Muhammad Irshad Khan - Web Security & Development Specialist",
  description: "Expert web security consultant and full-stack developer specializing in penetration testing, secure application development, SEO optimization, and digital marketing automation.",
  keywords: "web security, penetration testing, web development, SEO specialist, marketing automation, copywriting, cybersecurity consultant",
  author: "Muhammad Irshad Khan",
  ogType: "website"
};