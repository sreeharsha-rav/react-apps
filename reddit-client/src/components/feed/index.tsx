import Post from '@/components/feed/post-preview';
import { SubredditPost } from '@/lib/definition';
import { getNewPosts } from '@/lib/data';

const style = {
    wrapper: 'container mx-auto px-4 mb-12 space-y-2.5',
};

const Feed = async () => {
  "use server";

  const posts: SubredditPost[] = await getNewPosts();

  return (
    <div className={style.wrapper}>
        {posts.map((post) => (
          <Post 
            key={post.title}
            subreddit={post.subreddit}
            title={post.title} 
            author={post.author}
            imageUrl={post.url}
            numComments={post.num_comments}
            createdAt={post.created_utc}
            permalink={post.permalink}
          />
        ))}
    </div>
  );
}

export default Feed;