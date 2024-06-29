import React from 'react';
import Vote from './vote';
import Actions from './actions';
import Info from './info';
import Image from 'next/image';

interface PostProps {
    title: string;
    author: string;
    content: string;
};

const style = {
    post: 'flex flex-col space-y-1 cursor-pointer',
    wrapper: 'flex space-x-3 rounded bg-card p-2 border hover:shadow-md transition duration-200 ease-in-out',
    title: 'text-lg font-semibold',
    content: 'text-sm text-muted-foreground',
};

/*
* Post Component
* 
* Features within the Post component:
* - Voting system:
*   - Upvote
*   - Downvote
*   - Vote count
* - Actions:
*   - Comments
* - Info:
*  - Author
*  - Date
*  - Time
* - Content
*   - Title
*   - Description
*   - Image
*/
const Post: React.FC<PostProps> = ({ title, author, content }) => {
    return (
        <div className={style.wrapper}>
            <Vote />
            <div className={style.post}>
                <Info author={author}/>
                <h1 className={style.title}>{title}</h1>
                <div className={style.content}>
                    <p>{content}</p>
                </div>
                <Image
                    src="https://picsum.photos/200"
                    alt="Post Image"
                    width={100}
                    height={100}
                    objectFit='cover'
                    className='w-full h-48 rounded-md'
                />
                <Actions />
            </div>
        </div>
    );
};

export default Post;