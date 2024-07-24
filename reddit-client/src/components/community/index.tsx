import Banner from "./banner";
import Info from "./info";
import { getSubredditAbout } from "@/lib/data";
import { SubredditAbout } from "@/lib/definition";

async function ViewBanner({subreddit}: {subreddit: string}): Promise<JSX.Element> {
    "use server";

    const about: SubredditAbout = await getSubredditAbout({subreddit});
    const bannerProps = {
        bannerImage: about.banner_url,
        profilePic: about.icon_url,
        name: about.name,
        title: about.title,
    };

    return <Banner {...bannerProps} />;
};

async function ViewInfo({subreddit}: {subreddit: string}): Promise<JSX.Element> {
    "use server";

    const about: SubredditAbout = await getSubredditAbout({subreddit});
    const infoProps = {
        name: about.name,
        title: about.title,
        description: about.description,
        subscribers: about.subscribers,
        activeUsers: about.active_users,
        profilePic: about.icon_url,
        createdAt: new Date(about.creation_date * 1000).toLocaleDateString(),
        isOver18: about.is_over_18,
    };

    return <Info {...infoProps} />;
    
};

export { ViewBanner, ViewInfo };