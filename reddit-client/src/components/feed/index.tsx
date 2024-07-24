import Post from '@/components/feed/post-preview';
import { SubredditPost } from '@/lib/definition';
import { getPosts } from '@/lib/data';

const style = {
    wrapper: 'container mx-auto px-4 mb-12 space-y-2.5',
};

export default async function Feed ({subreddit}: {subreddit: string}) {
    "use server";
    
    const posts: SubredditPost[] = await getPosts({ subreddit });

    return (
      <div className={style.wrapper}>
          {posts.map((post) => (
            <Post 
              key={post.title}
              subreddit={post.subreddit}
              title={post.title} 
              author={post.author}
              imageUrl={post.url}
              score={post.score}
              ups={post.ups}
              downs={post.downs}
              numComments={post.num_comments}
              createdAt={post.created_utc}
              selftext={post.selftext}
              permalink={post.permalink}
            />
          ))}
      </div>
    );
}