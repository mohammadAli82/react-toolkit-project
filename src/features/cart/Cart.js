import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsync } from '../products/productsSlice';

export function Cart() {

  const dispatch=useDispatch();
  const items = useSelector((state) => state.cart.items);
  useEffect(()=>{
    dispatch(fetchAsync())
  },[])

  return (
    <>
      {items.map((item) => (
        <div className="card" style={{ marginRight: '1em' }} key={item.id}>
          <img className="card-img-top" src={item.thumbnail} alt="Card image cap" style={{ width: "200px" }} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))}
    </>
  );
}
