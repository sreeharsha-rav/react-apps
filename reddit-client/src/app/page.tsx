import Post from '@/components/feed/post-preview';
import demoPosts from '@/lib/demoData';

const style = {
  wrapper: 'container mx-auto px-4 mt-8 mb-12 space-y-2.5',
};

export default function Home() {
  return (
    <>
      <div className={style.wrapper}>
        {/* List of Posts */}
        {demoPosts.map((post) => (
          <Post 
            key={post.id} 
            title={post.title} 
            author={post.author}
            content={post.content}
          />
        ))}
      </div>
    </>
  );
}
