import Image from 'next/image';

const styles = {
    wrapper: 'mt-14 flex flex-col',
    bannerImage: 'h-52 relative',
    bannerContentWrapper: 'mx-auto max-w-5xl px-6 py-2',
    profileInfoWrapper: 'flex items-start space-x-4 pb-5',
    profilePicWrapper: `-mt-6 h-20 w-20 relative`,
    profilePic:
      'h-full w-full rounded-full border-4 border-white bg-white bg-cover object-contain',
    titleWrapper: 'mt-1',
    title: 'text-2xl font-bold text-[#D7DADC]',
    tag: 'pt-1 text-sm text-gray-400',
    joinButtonContainer: 'mt-1 flex items-center',
    joinedButton:
      'cursor-pointer rounded-full border border-gray-300 px-[1.6rem] py-1 text-center text-sm font-semibold',
};

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bannerImage}>
                <Image
                src='https://picsum.photos/200/300'
                layout='fill'
                className='object-cover'
                alt=''
                />
            </div>
            <div className='bg-[#1a1a1b]'>
                <div className={styles.bannerContentWrapper}>
                <div className={styles.profileInfoWrapper}>
                    <div className={styles.profilePicWrapper}>
                    <Image
                        className={styles.profilePic}
                        src='https://picsum.photos/200/300'
                        layout='fill'
                        alt=''
                    />
                    </div>

                    <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>cleverprogrammer</h1>
                    <h2 className={styles.tag}>r/cleverprogrammer</h2>
                    </div>

                    <div className={styles.joinButtonContainer}>
                    <button className={styles.joinedButton}>Joined</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}