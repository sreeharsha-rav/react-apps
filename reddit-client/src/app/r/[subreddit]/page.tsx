import { ViewBanner, ViewInfo } from '@/components/community/index';
import Feed from '@/components/feed/index';

const style = {
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
};


export default function SubredditHome({ params }: { params: { subreddit: string }}) {
  
  return (
    <> 
      <ViewBanner subreddit={params.subreddit} />
      <main className={style.main}>
        <div className={style.content}>
          <Feed subreddit={params.subreddit} />
        </div>
        <div className={style.infoContainer}>
          <ViewInfo subreddit={params.subreddit} />
        </div>
      </main>
    </>
  );
}