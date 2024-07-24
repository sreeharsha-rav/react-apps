import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const styles = {
    wrapper: 'flex flex-1 items-center space-x-3 rounded border border-muted-foreground bg-muted px-4 py-1.5 max-w-xl hover:border-muted focus-within:border-[#878A8C] transition-colors',
    search: 'h-5 w-5 text-muted-foreground',
    input: 'flex-1 bg-transparent text-sm focus:outline-none placeholder-muted-foreground',
};

const SearchBar = () => {
    return (
        <div className={styles.wrapper}>
            <MagnifyingGlassIcon className={styles.search} />
            <input className={styles.input} type='text' placeholder='Search ...' />
        </div>
    );
};

export default SearchBar;