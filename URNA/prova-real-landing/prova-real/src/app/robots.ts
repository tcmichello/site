import type { MetadataRoute } from 'next';
import { isDominioPendente, resolveSiteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  // Enquanto o domínio real não for informado, o site não é liberado para busca.
  if (isDominioPendente()) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${resolveSiteUrl()}/sitemap.xml`,
  };
}
