import Feed from '@/components/feed';

const styles = {
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6 items-center justify-center`,
  title: `text-4xl text-center mt-24 font-medium`,
  content: `mt-5 flex-1 space-y-4 items-center justify-center max-w-2xl`,
};


export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        r/popular
      </h1>

      <main className={styles.main}>
        <div className={styles.content}>
          <Feed subreddit='popular' />
        </div>
      </main>
    </>
  );
}
