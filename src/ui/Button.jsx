import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled, to }) {
  const className =
    'inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-500 disabled:cursor-not-allowed sm:py-4 md:px-6';
  if (to) return <Link to={to} className={className}>{children}</Link>;
  return (
    <div disabled={disabled} className={className}>
      {children}
    </div>
  );
}
