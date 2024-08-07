import Image from 'next/image';
import { Button } from '../ui/button';

const styles = {
    wrapper: 'mt-14 flex flex-col',
    bannerImage: 'h-20 relative',
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

// TODO: Make the banner image dynamic
interface BannerProps {
    bannerImage: string;
    profilePic: string;
    name: string;
    title: string;
}

export default function Banner({ bannerImage, profilePic, name, title }: BannerProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bannerImage}>
                {bannerImage ? (
                    <Image
                        src={bannerImage}
                        layout='fill'
                        className='object-cover filter blur-sm'
                        alt='Banner Image'
                    />
                ) : 
                    <div className='bg-[#343536] w-full h-full'></div>}
            </div>
            <div className={styles.bannerContentWrapper}>
                {/* Info about Subreddit */}
                <div className={styles.profileInfoWrapper}>
                    <div className={styles.profilePicWrapper}>
                        <Image
                            className={styles.profilePic}
                            src={profilePic}
                            layout='fill'
                            alt=''
                        />
                    </div>
                    <div>
                        <h1 className={styles.title}>{title}</h1>
                        <h2 className={styles.tag}>r/{name}</h2>
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