import React from 'react';
import Vote from './vote';
import Actions from './actions';
import Info from './info';

interface PostProps {
    title: string;
    author: string;
    content: string;
};

const style = {
    post: 'flex flex-col space-y-1 cursor-pointer',
    wrapper: 'flex space-x-3 mb-4 rounded bg-card p-2 border hover:shadow-md transition duration-200 ease-in-out',
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
    const authorDefault = 'John Doe';

    return (
        <div className={style.wrapper}>
            <Vote />
            <div className={style.post}>
                <Info author={author}/>
                <h1 className={style.title}>{title}</h1>
                <p className={style.content}>{content}</p>
                <Actions />
            </div>
        </div>
    );
};

export default Post;