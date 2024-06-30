import { SubredditAbout, SubredditAboutResponse, SubredditPost, SubredditPostResponse } from "./definition";

const apiURL = "https://www.reddit.com/r/ProgrammerHumor";

// Get subreddit about information from the API
export async function getSubredditAbout(): Promise<SubredditAbout> {
    try {
        // Fetch subreddit about information from the API
        const response = await fetch(`${apiURL}/about.json`, {
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
        const subreddit = data.data;
        const about: SubredditAbout = {
            name: subreddit.display_name,
            title: subreddit.title,
            description: subreddit.public_description,
            subscribers: subreddit.subscribers,
            active_users: subreddit.active_user_count,
            icon_url: subreddit.icon_img,
            banner_url: subreddit.banner_background_image,
            creation_date: subreddit.created_utc,
            is_over_18: subreddit.over18
        };
        
        return about;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch subreddit about information");
    }
}

// Get new posts from the API
export async function getNewPosts(): Promise<SubredditPost[]> {
  try {
    // Fetch new posts from the API
    const response = await fetch(`${apiURL}/new.json`, {
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
            num_comments: post.num_comments,
            created_utc: post.created_utc,
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
export async function getHotPosts(): Promise<SubredditPost[]> {
    try {
        // Fetch hot posts from the API
        const response = await fetch(`${apiURL}/hot.json`, {
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
                num_comments: post.num_comments,
                created_utc: post.created_utc,
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
export async function getTopPosts(): Promise<SubredditPost[]> {
    try {
        // Fetch top posts from the API
        const response = await fetch(`${apiURL}/top.json`, {
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
                num_comments: post.num_comments,
                created_utc: post.created_utc,
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