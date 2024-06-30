import { upvoteIcon, downvoteIcon } from "../ui/icons";

const style = {
    vote: "flex flex-col items-center space-y-1",
    button: "flex items-center justify-center w-8 h-8 p-1 text-xs text-sky-400 hover:text-blue-300 active: text-blue",
    count: "text-xs font-semibold",
};

export default function Vote({ upvotes, downvotes, score }: { upvotes: number, downvotes: number, score: number }) {
    
    // TODO: State management for upvotes and downvotes, and update the score accordingly

    return (
        <div className={style.vote}>
            <button className={style.button}>
                {upvoteIcon()}
            </button>
            <span className={style.count}>{score}</span>
            <button className={style.button}>
                {downvoteIcon()}
            </button>
        </div>
    );
}