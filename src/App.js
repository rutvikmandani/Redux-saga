import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchProducts, setProducts } from './Redux/Action';
import Api from './Api/Api';

function App() {
  // debugger;
  const dispatch = useDispatch();

  // const temp = dispatch(setProducts())
  // console.log("temp:", temp)
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  const product = useSelector((state) => state.products?.products?.[0]);
  console.log("products",product)

  return (
    <>
      <div>
    <h1>Hello</h1>

    {
      product?.map((el)=> 
      <>
      <p key={el.id}>{el.id}</p>
      <p>{el.title}</p>

      </>
      )}
      </div>
    </>
  );
}

export default App;
