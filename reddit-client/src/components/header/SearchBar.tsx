import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const styles = {
    wrapper: 'flex flex-1 items-center space-x-3 rounded border border-[#343536] bg-[#272729] px-4 py-1.5 max-w-xl hover:border-[#878A8C] focus-within:border-[#878A8C] transition-colors',
    search: 'h-5 w-5 text-[#878A8C]',
    input: 'flex-1 bg-transparent text-sm focus:outline-none placeholder-[#878A8C] placeholder-opacity-50',
};

const SearchBar = () => {
    return (
        <div className={styles.wrapper}>
            <MagnifyingGlassIcon className={styles.search} />
            <input className={styles.input} type='text' placeholder='Search Subreddit' />
        </div>
    );
};

export default SearchBar;