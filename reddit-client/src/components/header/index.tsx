import Logo from './Logo';
import SearchBar from './SearchBar';
import { AvatarIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

const styles = {
  header: 'fixed inset-x-0 top-0 z-50 bg-[#1a1a1b]',
  wrapper: 'flex items-center justify-between border-b space-x-4 border-[#343536] px-4 py-4 max-w-full',
};

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Logo />
          <SearchBar />
          <div className='flex items-center space-x-4'>
            <AvatarIcon className='w-6 h-6 text-gray-500 hover:text-gray-300' />
            <button className='rounded border border-gray-300 px-3 py-1 text-center text-sm font-semibold'>Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
}

/* TODO:
    - Add search bar
    - Add create post button
*/