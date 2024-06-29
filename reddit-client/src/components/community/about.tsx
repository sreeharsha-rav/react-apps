import Image from "next/image";
import { Button } from "../ui/button";

const styles = {
  wrapper:'flex flex-col space-y-2 divide-y divide-secondary rounded border border-secondary bg-card p-4',
  profileInfoContainer: 'flex items-center space-x-4 ',
  profilePicContainer: `relative h-12 w-12`,
  profilePic: 'object-contain',
  aboutContent: 'py-2 text-sm text-muted-foreground',
  statsWrapper: 'flex items-center space-x-16',
  stat: 'flex flex-col',
  statTitle: 'text-xs',
  footer: 'flex flex-col space-y-4 pt-2',
  createdAt: 'text-sm font-light',
};

const About = () => {
    return (
        <div className={styles.wrapper}>
            <div className='pb-2'>
                <div className={styles.profileInfoContainer}>
                <div className={styles.profilePicContainer}>
                    <Image
                        src='/subreddit-logo.jpg'
                        layout='fill'
                        className={styles.profilePic}
                        alt='Profile Image'
                    />
                </div>
                <p>r/ProgrammerHumor</p>
                </div>
                <p className={styles.aboutContent}>
                memes And Jokes About Everything 
                Programming And CS
                For anything funny related to programming and 
                software development.
                </p>

                <div className={styles.statsWrapper}>
                <div className={styles.stat}>
                    <span>3.7m</span>
                    <span className={styles.statTitle}>Members</span>
                </div>
                <div className={styles.stat}>
                    <span>446</span>
                    <span className={styles.statTitle}>Online</span>
                </div>
                </div>
            </div>

            <div className={styles.footer}>
                <p className={styles.createdAt}>Created Jan 31, 2021</p>
                <Button variant='secondary'>Joined</Button>
            </div>
            </div>
    );
}

export default About;