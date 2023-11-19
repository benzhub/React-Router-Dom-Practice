import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

// eslint-disable-next-line react/prop-types
export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button onClick={handleDeleteItem} type="small">
      Delete
    </Button>
  );
}
