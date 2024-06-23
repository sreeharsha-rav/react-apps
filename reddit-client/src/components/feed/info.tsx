const style = {
    wrapper: 'flex items-center space-x-1 text-xs text-gray-500',
    profilePic: 'h-4 w-4 rounded-full',
    profilePicContainer: 'flex items-center space-x-1',
    tag: 'cursor-pointer font-semibold hover:underline',
    postedBy: 'flex items-center space-x-1',
}

const Info = ({ author } : any) => {
    return (
        <div className={style.wrapper}>
            <div className={style.profilePicContainer}>
                <img 
                    className={style.profilePic}
                    src="/reddit-icon.png" alt="Reddit Icon"
                />
            </div>

            <div className={style.tag}>u/test</div>

            <div>•</div>

            <div className={style.postedBy}>Posted by {author}</div>

            <div>•</div>

            <span>1 hour ago</span>
        </div>
    );
}

export default Info;