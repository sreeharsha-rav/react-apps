import Banner from '@/components/community/banner';
import Feed from '@/components/feed/index';
import Header from '@/components/header/index';
import About from '@/components/community/about';

const style = {
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
};

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main className={style.main}>
        <div className={style.content}>
          <Feed />
        </div>
        <div className={style.infoContainer}>
          <About />
        </div>
      </main>
    </>
  );
}
