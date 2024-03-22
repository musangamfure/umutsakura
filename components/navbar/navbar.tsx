import ActionButtons from './_components/action-buttons';
import Logo from './_components/logo';
import { Menu } from './_components/menu';

const Navbar = () => {
  const navbarClasses = ` flex items-center justify-between px-4   bg-white top-0 shadow-sm border-b border-gray-200 h-16 sticky z-50`;
  return (
    <div className={navbarClasses}>
      <div className='flex items-center justify-center'>
        <Logo />
        <Menu />
      </div>

      <ActionButtons />
    </div>
  );
};

export default Navbar;
