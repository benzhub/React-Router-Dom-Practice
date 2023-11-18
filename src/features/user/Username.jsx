import { useSelector } from 'react-redux';

export default function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="hidden p-1 text-sm font-semibold md:block">
      Hi, {username}
    </div>
  );
}
