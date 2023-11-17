import { formatCurrency } from '../../utils/helpers';

// eslint-disable-next-line react/prop-types
function MenuItem({ pizza }) {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        {/* eslint-disable-next-line react/prop-types */}
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
