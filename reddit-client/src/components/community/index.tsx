import Banner from "./banner";
import Info from "./info";
import { getSubredditAbout } from "@/lib/data";
import { SubredditAbout } from "@/lib/definition";

// TODO: Gather information about the subreddit through the API and pass it to the Banner and About components


async function ViewBanner(): Promise<JSX.Element> {
    "use server";

    const about: SubredditAbout = await getSubredditAbout();
    const bannerProps = {
        bannerImage: about.banner_url,
        profilePic: about.icon_url,
        name: about.name,
        title: about.title,
    };

    return <Banner {...bannerProps} />;
};

async function ViewInfo(): Promise<JSX.Element> {
    "use server";

    const about: SubredditAbout = await getSubredditAbout();
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