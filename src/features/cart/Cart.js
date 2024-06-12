import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsync } from "./productsSlice";
import '../cart/Card.css';

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.products.products);
  useEffect(()=>{
    dispatch(fetchAsync())
  },[])

  return (
    <>
      {
        items.map((item)=>{

        })
      }
    </>
  );
}
