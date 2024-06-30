import { SubredditAbout, SubredditAboutResponse, SubredditPost, SubredditPostResponse } from "./definition";

const apiURL = "https://www.reddit.com/r/";

// Get subreddit about information from the API
export async function getSubredditAbout({subreddit}: {subreddit: string}): Promise<SubredditAbout> {
    try {
        // Fetch subreddit about information from the API
        const response = await fetch(`${apiURL}/${subreddit}/about.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: SubredditAboutResponse = await response.json();

        // Check if the data is valid
        if (data.kind !== "t5") {
            throw new Error("Invalid subreddit about data");
        }

        // Convert the data to a JSON object and return it
        const subredditData = data.data;
        const about: SubredditAbout = {
            name: subredditData.display_name,
            title: subredditData.title,
            description: subredditData.public_description,
            subscribers: subredditData.subscribers,
            active_users: subredditData.active_user_count,
            icon_url: subredditData.icon_img,
            banner_url: subredditData.banner_background_image,
            creation_date: subredditData.created_utc,
            is_over_18: subredditData.over18
        };
        
        return about;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch subreddit about information");
    }
}

// Get posts standard from the API
export async function getPosts({subreddit}: {subreddit: string}): Promise<SubredditPost[]> {
    try {
        // Fetch posts from the API
        const response = await fetch(`${apiURL}/${subreddit}.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: SubredditPostResponse = await response.json();

        // Convert the data to a JSON object and return it
    const posts: SubredditPost[] = data.data.children.map(child => {
        const post = child.data;
        return {
            title: post.title,
            author: post.author,
            subreddit: post.subreddit,
            score: post.score,
            ups: post.ups,
            downs: post.downs,
            num_comments: post.num_comments,
            created_utc: post.created_utc,
            selftext: post.selftext,
            url: post.url,
            permalink: post.permalink
        };
    });

    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Get new posts from the API
export async function getNewPosts({subreddit}: {subreddit: string}): Promise<SubredditPost[]> {
  try {
    // Fetch new posts from the API
    const response = await fetch(`${apiURL}/${subreddit}/new.json`, {
        next: {
            revalidate: 60
        }
    });
    const data: SubredditPostResponse = await response.json();

    // Convert the data to a JSON object and return it
    const posts: SubredditPost[] = data.data.children.map(child => {
        const post = child.data;
        return {
            title: post.title,
            author: post.author,
            subreddit: post.subreddit,
            score: post.score,
            ups: post.ups,
            downs: post.downs,
            num_comments: post.num_comments,
            created_utc: post.created_utc,
            selftext: post.selftext,
            url: post.url,
            permalink: post.permalink
        };
    });

    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Get hot posts from the API
export async function getHotPosts({subreddit}: {subreddit: string}): Promise<SubredditPost[]> {
    try {
        // Fetch hot posts from the API
        const response = await fetch(`${apiURL}/${subreddit}/hot.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: SubredditPostResponse = await response.json();

        // Convert the data to a JSON object and return it
        const posts: SubredditPost[] = data.data.children.map(child => {
            const post = child.data;
            return {
                title: post.title,
                author: post.author,
                subreddit: post.subreddit,
                score: post.score,
                ups: post.ups,
                downs: post.downs,
                num_comments: post.num_comments,
                created_utc: post.created_utc,
                selftext: post.selftext,
                url: post.url,
                permalink: post.permalink
            };
        });

        return posts;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Get top posts from the API
export async function getTopPosts({subreddit}: {subreddit: string}): Promise<SubredditPost[]> {
    try {
        // Fetch top posts from the API
        const response = await fetch(`${apiURL}/${subreddit}/top.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: SubredditPostResponse = await response.json();

        // Convert the data to a JSON object and return it
        const posts: SubredditPost[] = data.data.children.map(child => {
            const post = child.data;
            return {
                title: post.title,
                author: post.author,
                subreddit: post.subreddit,
                score: post.score,
                ups: post.ups,
                downs: post.downs,
                num_comments: post.num_comments,
                created_utc: post.created_utc,
                selftext: post.selftext,
                url: post.url,
                permalink: post.permalink
            };
        });

        return posts;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Get comments for a post from the API
export async function getPostComments(permalink: string): Promise<string[]> {
    try {
        // Fetch comments for a post from the API
        const response = await fetch(`https://www.reddit.com${permalink}.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: any = await response.json();

        // Convert the data to a JSON object and return it
        const comments: string[] = data[1].data.children.map((child: any) => {
            return child.data.body;
        });

        return comments;
    } catch (error) {
        console.error(error);
        return [];
    }
}