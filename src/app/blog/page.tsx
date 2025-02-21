import { Metadata } from 'next';
import { getSortedPostsMetadata } from '@/lib/posts';
import BlogContent from '@/components/blog/BlogContent';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.site.name}`,
  description: 'Artículos sobre desarrollo web, ingeniería informática y tecnología',
};

export default function BlogPage() {
  const posts = getSortedPostsMetadata();
  return <BlogContent initialPosts={posts} />;
}