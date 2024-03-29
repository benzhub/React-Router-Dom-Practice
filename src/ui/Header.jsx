import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="inline-block p-1 tracking-widest">
        Fast React Pizza Co.
      </Link>

      <div className='flex items-center px-4 py-3 gap-4'>
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}
