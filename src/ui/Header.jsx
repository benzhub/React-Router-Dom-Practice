import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="border-b-2 border-stone-200 bg-yellow-500 px-4 uppercase">
      <Link to="/" className="inline-block p-1 tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}
