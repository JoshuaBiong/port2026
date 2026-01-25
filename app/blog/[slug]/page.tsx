import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, blogList } from '../../data/blogPosts';
import BlogClientWrapper from './BlogClientWrapper';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogList.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Joshua Biong`,
    description: post.preview,
    openGraph: {
      title: post.title,
      description: post.preview,
      type: 'article',
      publishedTime: post.date, // Note: date string 'Jan 26, 2026' might need parsing for strict ISO, but good enough for now
      authors: ['Joshua Biong'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.preview,
    }
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return <BlogClientWrapper post={post} />;
}
