import { ChatBubbleIcon, Share1Icon } from '@radix-ui/react-icons';

const style = {
    icon: 'w-4 h-4 text-gray-500 hover:text-gray-700 active:text-gray-900',
    iconContainer: 'flex items-center space-x-1',
    wrapper: 'flex items-center space-x-3 pt-2',
}

const Actions = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.iconContainer}>
                <ChatBubbleIcon className={style.icon} />
                <span className='text-xs'>12 comments</span>
            </div>
            <div className={style.iconContainer}>
                <Share1Icon className={style.icon} />
                <span className='text-xs'>Share</span>
            </div>
        </div>
    );
}

export default Actions;
