const style = {
    wrapper: 'flex items-center space-x-1 text-xs text-gray-500',
    profilePic: 'h-4 w-4 rounded-full',
    profilePicContainer: 'flex items-center space-x-1',
    tag: 'cursor-pointer font-semibold hover:underline',
    postedBy: 'flex items-center space-x-1',
}

interface InfoProps {
    subreddit: any;
    author: string;
    createdAt: number;
}

// Function to convert UTC time to time ago
const getTimeAgo = (createdAt: number) => {
    // Get current time set in seconds
    const currentTime = Math.floor(Date.now() / 1000);

    // Calculate the difference between the current time and the time the post was created
    const timeDifference = currentTime - createdAt;

    // Calculate the time ago
    const seconds = timeDifference;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    if (seconds > 0) return `${seconds} seconds ago`;
}

const Info = ({ subreddit, author, createdAt }: InfoProps) => {
    return (
        <div className={style.wrapper}>
            <div className={style.profilePicContainer}>
                <img 
                    className={style.profilePic}
                    src="/reddit-icon.png" alt="Reddit Icon"
                />
            </div>

            <div className={style.tag}>r/{subreddit}</div>

            <div>•</div>

            <div className={style.postedBy}>Posted by {author}</div>

            <div>•</div>

            <span>{getTimeAgo(createdAt)}</span>
        </div>
    );
}

export default Info;