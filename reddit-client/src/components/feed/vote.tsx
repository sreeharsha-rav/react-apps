import { upvoteIcon, downvoteIcon } from "../ui/icons";

const style = {
    vote: "flex flex-col items-center space-y-1",
    button: "flex items-center justify-center w-8 h-8 p-1 text-xs text-sky-400 hover:text-blue-300 active: text-blue",
    count: "text-xs font-semibold",
};

export default function Vote() {
    const upvotes = 10;
    const downvotes = 5;

    return (
        <div className={style.vote}>
            <button className={style.button}>
                {upvoteIcon()}
            </button>
            <span className={style.count}>{upvotes - downvotes}</span>
            <button className={style.button}>
                {downvoteIcon()}
            </button>
        </div>
    );
}