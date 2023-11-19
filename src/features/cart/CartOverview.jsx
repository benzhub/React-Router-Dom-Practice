import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  // const totalCartPrice = useSelector(state => state.cart.cart.reduce((acc, cur)=> acc+cur.totalPrice, 0);)
  // pass to useSelector a callback function
  const totalCartPrice = useSelector(getTotalCartPrice)
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
