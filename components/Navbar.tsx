/** @format */

import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component

const NavBar = () => (
  <ErrorBoundary>
    <header className='w-full  absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/'>
          <a className='flex justify-center items-center'>
            {' '}
            {/* Use 'a' tag for Link */}
            <Image
              src='/logo.svg'
              alt='logo'
              width={118}
              height={18}
              className='object-contain'
            />
          </a>
        </Link>

        <CustomButton
          title='Sign in'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </header>
  </ErrorBoundary>
);

export default NavBar;
