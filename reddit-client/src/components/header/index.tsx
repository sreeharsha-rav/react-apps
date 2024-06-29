import Logo from './Logo';
import SearchBar from './SearchBar';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

const styles = {
  header: 'fixed inset-x-0 top-0 z-50 bg-popover',
  wrapper: 'flex items-center justify-between border-b space-x-4 border-muted px-4 py-4 max-w-full',
};

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Logo />
          <SearchBar />
          {/* Future Todo: Add other features here */}
          <div className='flex items-center space-x-4'>
            <Avatar>
              <AvatarImage src='https://github.com/profile.png' alt='avatar' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant='destructive'>Log Out</Button>
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