import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

// eslint-disable-next-line react/prop-types
export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    // fetcher最大的好處就是會自動判斷是否拿到新的state
    // 如果拿到就會自動re-render，非常聰明
    // 我們應該多利用這種方式更新頁面，而不是用重刷頁面或是navigate
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data)
  return null;
}
