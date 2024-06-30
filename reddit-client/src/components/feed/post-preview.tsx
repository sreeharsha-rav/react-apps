import React from 'react';
import Vote from './vote';
import Actions from './actions';
import Info from './info';
import Image from 'next/image';

interface PostProps {
    subreddit: any;
    title: string;
    author: string;
    imageUrl: string;
    score: number;
    ups: number;
    downs: number;
    numComments: number;
    createdAt: any;
    permalink: string;
};

const style = {
    post: 'flex flex-wrap flex-col justify-center align-middle cursor-pointer',
    wrapper: 'flex space-x-3 rounded bg-card p-2 border hover:bg-muted',
    title: 'text-2xl font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap hover:underline',
    content: 'p-3 flex justify-center items-center align-middle',
    image: 'rounded-lg overflow-hidden',
};

// TODO: How to center the image in the post content?

const PostImage = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <div className={style.image}>
            <Image
                src={imageUrl}
                alt="Post Image"
                width={500}
                height={500}
                objectFit='fill'
            />
        </div>
    );
}

const Post: React.FC<PostProps> = (
    { 
        subreddit, 
        title, 
        author, 
        imageUrl,
        score,
        ups,
        downs, 
        numComments, 
        createdAt, 
        permalink 
    }: PostProps
) => {

    // Check if the image URL contains a valid image extension
    const isImage = (imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null);

    return (
        <div className={style.wrapper}>
            <Vote upvotes={ups} downvotes={downs} score={score} />
            <div className={style.post}>
                <Info 
                    subreddit={subreddit} 
                    author={author} 
                    createdAt={createdAt}
                />
                <h1 className={style.title}>{title}</h1>
                <div className={style.content}>
                    {isImage && <PostImage imageUrl={imageUrl} />}
                </div>
                <Actions numComments={numComments}/>
            </div>
        </div>
    );
};

export default Post;