import Hello from '../../../posts/hello.mdx';

export const metadata = {
  title: 'Hello World - Blog'
};

export default function HelloPage() {
  return (
    <section className="container mx-auto px-6 py-24">
      <article className="prose dark:prose-invert">
        <Hello />
      </article>
    </section>
  );
}
