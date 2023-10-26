import RoutedProtected from '@/app/test/page';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <div
        className='flex flex-col
      items-center justify-center
      min-h-screen
      bg-gray-50'
      >
        <RoutedProtected />
      </div>
    </div>
  );
}
