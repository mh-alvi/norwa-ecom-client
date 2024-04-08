// ProductList.js
import { useDispatch } from 'react-redux';
import { setProducts } from './ProductSlice';

function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate fetching products from an API (replace with actual data)
    const fetchedProducts = [...]; // Array of product objects
    dispatch(setProducts(fetchedProducts));
  }, [dispatch]);

  return (
    <div>
      {/* Render product list */}
      {/* Example: */}
      {/* <h2>{product.name}</h2> */}
      {/* <p>{product.description}</p> */}
      {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
    </div>
  );
}
