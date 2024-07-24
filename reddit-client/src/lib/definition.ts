type SubredditAbout = {
    name: string;
    title: string;
    description: string;
    subscribers: number;
    active_users: number;
    icon_url: string;
    banner_url: string;
    creation_date: number;
    is_over_18: boolean;
}

type SubredditAboutResponse = {
    kind: string;
    data: any;
}

type SubredditPost = {
    title: string;
    author: string;
    subreddit: string;
    score: number;
    ups: number;
    downs: number;
    num_comments: number;
    created_utc: number;
    selftext: string;
    url: string;
    permalink: string;
}
  
type SubredditPostResponse = {
    kind: string;
    data: {
        children: Array<{
            kind: string;
            data: any;
        }>;
    };
}
  
export type { SubredditAbout, SubredditAboutResponse, SubredditPost, SubredditPostResponse };