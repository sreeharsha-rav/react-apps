import Image from 'next/image';
import { Button } from '../ui/button';

const styles = {
    wrapper: 'mt-14 flex flex-col',
    bannerImage: 'h-48 relative',
    bannerContentWrapper: 'flex items-center justify-between w-full mx-auto px-10 py-1 border-b',
    profileInfoWrapper: 'flex items-start space-x-4 pb-3',
    profilePicWrapper: `-mt-10 h-20 w-20 relative`,
    profilePic:
      'h-full w-full rounded-full border-2 border-[#343536] bg-white bg-cover object-contain',
    title: 'text-2xl font-bold text-gray-100',
    tag: 'pt-1 pl-1 text-sm text-gray-300',
    buttonWrapper: 'flex items-center justify-end space-x-4',
    joinedButton:
      'cursor-pointer rounded-full border border-gray-300 px-[1.6rem] py-1 text-center text-sm font-semibold',
};

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bannerImage}>
                <Image
                src='/subreddit-banner.jpg'
                layout='fill'
                className='object-cover'
                alt=''
                />
            </div>
            <div className={styles.bannerContentWrapper}>
                {/* Info about Subreddit */}
                <div className={styles.profileInfoWrapper}>
                    <div className={styles.profilePicWrapper}>
                        <Image
                            className={styles.profilePic}
                            src='/subreddit-logo.jpg'
                            layout='fill'
                            alt=''
                        />
                    </div>
                    <div>
                        <h1 className={styles.title}>ProgrammerHumor</h1>
                        <h2 className={styles.tag}>r/ProgrammerHumor</h2>
                    </div>
                </div>
                {/* Actions - Create Post, Join */}
                <div className={styles.buttonWrapper}>
                    <Button variant={'default'}>Create Post</Button>
                    <Button variant={'secondary'}>Joined</Button>
                </div>
            </div>
        </div>
    );
}