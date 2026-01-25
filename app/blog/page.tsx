import { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Writings | Joshua Biong',
  description: 'Thoughts on software engineering, design systems, and the future of tech.',
};

export default function BlogIndexPage() {
  return <BlogIndexClient />;
}
