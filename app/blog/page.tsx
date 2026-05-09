import Link from 'next/link';

export const metadata = {
  title: 'Blog - Your Name'
};

export default function BlogPage() {
  return (
    <section className="container mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Thoughts, tutorials and case studies.</p>

      <ul className="mt-8 space-y-4">
        <li>
          <Link href="/blog/hello" className="text-lg font-semibold hover:underline">
            Hello World
          </Link>
          <p className="text-sm text-slate-600 dark:text-slate-300">Example MDX post</p>
        </li>
      </ul>
    </section>
  );
}
